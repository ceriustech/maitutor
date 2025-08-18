import OpenAI from 'openai';

const openai = new OpenAI(
	AI({
		apiKey: process.env['OPENAI_KEY_TEST'],
	})
);
