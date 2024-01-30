export default class GLaDOS {
    testConvertToEuro(callback) {
        if (callback() === 'NOT_IMPLEMENTED') return;

        const payloads = [
            { value: 0, expected: '0€' },
            { value: 12478, expected: '124.78€' },
            { value: -5489, expected: '-54.89€' },
        ];

        const payloadsShouldThrow = [
            { value: 'test' },
            { value: {} },
            { value: [] },
            { value: null },
            { value: undefined },
        ];

        try {
            for (const payload of payloads) {
                this.logPayload(payload);
                if (callback(payload.value) !== payload.expected) throw 0;
            }
            for (const payload of payloadsShouldThrow) {
                this.logPayload(payload);
                if (!this.testShouldThrow(() => callback(payload.value))) throw 0;
            }

            process.send(1);
        } catch (e) {
            process.send(0);
        }
    }

    testCensor(callback) {
        if (callback() === 'NOT_IMPLEMENTED') return;

        const payloads = [
            {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                words: ['ipsum', 'elit'],
                expected: 'Lorem ***** dolor sit amet, consectetur adipiscing *****.',
            },
            {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                words: ['ipsum', 'elit'],
                replacement: 'X',
                expected: 'Lorem XXXXX dolor sit amet, consectetur adipiscing XXXXX.',
            },
        ];

        const payloadsShouldThrow = [
            { value: 0, words: ['ipsum', 'elit'] },
            { value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', words: 'ipsum' },
            {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                words: ['ipsum', 'elit'],
                replacement: 0,
            },
            {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                words: ['ipsum', 'elit'],
                replacement: {},
            },
            {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                words: ['ipsum', 'elit'],
                replacement: [],
            },
            {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                words: ['ipsum', 'elit'],
                replacement: null,
            },
        ];

        try {
            for (const payload of payloads) {
                this.logPayload(payload);
                if (callback(payload.value, payload.words, payload.replacement) !== payload.expected) throw 0;
            }
            for (const payload of payloadsShouldThrow) {
                this.logPayload(payload);
                if (!this.testShouldThrow(() => callback(payload.value, payload.words, payload.replacement))) throw 0;
            }

            process.send(1);
        } catch (e) {
            process.send(0);
        }
    }

    testCheckPassword(callback) {
        if (callback() === 'NOT_IMPLEMENTED') return;

        const payloads = [
            { value: 'Test1', expected: false },
            { value: 'Test1!', expected: false },
            { value: 'Test1!a', expected: false },
            { value: 'Test1!aAaA', expected: true },
        ];

        try {
            for (const payload of payloads) {
                this.logPayload(payload);
                if (callback(payload.value) !== payload.expected) throw 0;
            }
            process.send(1);
        } catch (e) {
            process.send(0);
        }
    }

    testIsDate(callback) {
        if (callback() === 'NOT_IMPLEMENTED') return;

        const payloads = [
            { value: '2020-12-31', expected: true },
            { value: '2020-12-32', expected: false },
            { value: '2020-12-31 23:59:59', expected: false },
            { value: '2020-12-31T23:59:59', expected: true },
        ];

        try {
            for (const payload of payloads) {
                this.logPayload(payload);
                if (callback(payload.value) !== payload.expected) throw 0;
            }
            process.send(1);
        } catch (e) {
            process.send(0);
        }
    }

    testShouldThrow(callback) {
        try {
            callback();
            return false;
        } catch (e) {
            return true;
        }
    }

    logPayload(payload) {
        if (payload.expected) process.send(`Test with payload: ${JSON.stringify(payload.value)}`);
        else process.send(`Test with payload: ${JSON.stringify(payload.value)} should throw`);
    }
}
