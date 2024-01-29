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
                if (callback(payload.value) !== payload.expected) throw 0;
            }
            for (const payload of payloadsShouldThrow) {
                if (!this.testShouldThrow(() => callback(payload.value))) throw 0;
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
}
