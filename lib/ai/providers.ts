import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';

// Set base URL for local DeepSeek models
const deepseekBase =
  process.env.DEEPSEEK_BASE_URL ?? 'http://localhost:1234/v1';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        'chat-model': xai('grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
        'deepseek-ft-f16': createOpenAICompatible({ name: 'deepseek', baseURL: process.env.DEEPSEEK_BASE_URL! })('deepseek-ft-f16'),
        // Local DeepSeek models
        'deepseek-base': createOpenAICompatible({
          name: 'deepseek',
          baseURL: deepseekBase,
        })('deepseek-base'),
        'deepseek-v2': createOpenAICompatible({
          name: 'deepseek',
          baseURL: deepseekBase,
        })('deepseek-v2'),
        'deepseek-v3': createOpenAICompatible({
          name: 'deepseek',
          baseURL: deepseekBase,
        })('deepseek-v3'),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
      },
    });
