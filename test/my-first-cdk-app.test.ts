import { handler } from "../src";

describe('My First CDK App Tests', () => {

    it('returns name and tekst', async () => {
        const output = await handler({ name: 'Shaurya' });
        expect(output).toStrictEqual('Good Job Faruk!')
    })

    it('returns no name and tekst', async () => {
        const output = await handler({ name: '' });
        expect(output).toStrictEqual('Good Job')
    })
});