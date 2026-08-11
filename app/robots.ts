import { MetadataRoute } from 'next'

// AI assistant crawlers are explicitly allowed so Chivora is discoverable
// in ChatGPT, Claude, Perplexity, Gemini and other AI search surfaces.
const AI_CRAWLERS = [
  'GPTBot',          // OpenAI training
  'OAI-SearchBot',   // ChatGPT search
  'ChatGPT-User',    // ChatGPT live browsing
  'ClaudeBot',       // Anthropic training
  'Claude-Web',      // Claude live browsing
  'anthropic-ai',
  'PerplexityBot',   // Perplexity search
  'Perplexity-User',
  'Google-Extended', // Gemini training
  'Applebot-Extended',
  'meta-externalagent',
  'Bytespider',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://www.chivora.co.uk/sitemap.xml',
  }
}
