'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from '@/components/code-block'
import { InteractiveChart } from '@/components/interactive-chart'
import { Callout } from '@/components/callout'
import { Info, Lightbulb, CheckCircle } from 'lucide-react'

// Sample MDX content
const mdxContent = `
# MDX in Action

MDX allows you to use **JSX** in your Markdown content. This creates a powerful authoring experience for technical content.

## Interactive Components

You can embed React components directly in your Markdown:

<InteractiveChart />

## Code Examples

Here's a simple React component:

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
\`\`\`

## Callouts and Alerts

<Callout type="info">
  This is an informational callout with an icon and styled content.
</Callout>

<Callout type="tip">
  Here's a helpful tip for using MDX effectively.
</Callout>

<Callout type="warning">
  Be careful when mixing Markdown and JSX syntax.
</Callout>

<Callout type="success">
  MDX is successfully rendering React components!
</Callout>

## Benefits of MDX

1. **Familiar Syntax**: Use Markdown for content structure
2. **Component Integration**: Embed React components seamlessly
3. **Type Safety**: Full TypeScript support
4. **Performance**: Server-side rendering with Next.js
5. **Flexibility**: Customize components for your needs

## Best Practices

- Keep components simple and focused
- Use semantic HTML elements
- Ensure accessibility compliance
- Test components in isolation
- Document component props and usage
`

export function MDXDemo() {
  const [activeTab, setActiveTab] = useState('preview')

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card>
        <CardHeader>
          <CardTitle>What is MDX?</CardTitle>
          <CardDescription>
            MDX is a powerful format that lets you write JSX directly in your Markdown files. 
            This demo shows how to create rich, interactive content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Markdown Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Simple, readable syntax</li>
                <li>• Easy to write and maintain</li>
                <li>• Version control friendly</li>
                <li>• Great for documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">JSX Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Interactive components</li>
                <li>• Reusable UI elements</li>
                <li>• Type safety with TypeScript</li>
                <li>• Full React ecosystem</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Live MDX Demo</CardTitle>
          <CardDescription>
            Toggle between the rendered output and the source code to see how MDX works.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="source">Source</TabsTrigger>
            </TabsList>
            
            <TabsContent value="preview" className="mt-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-4">MDX in Action</h1>
                    <p>
                      MDX allows you to use <strong>JSX</strong> in your Markdown content. 
                      This creates a powerful authoring experience for technical content.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Interactive Components</h2>
                    <p>You can embed React components directly in your Markdown:</p>
                    <div className="my-4">
                      <InteractiveChart />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Code Examples</h2>
                    <p>Here's a simple React component:</p>
                    <CodeBlock
                      language="jsx"
                      code={`function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}`}
                    />
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Callouts and Alerts</h2>
                    <div className="space-y-4">
                      <Callout type="info">
                        This is an informational callout with an icon and styled content.
                      </Callout>
                      <Callout type="tip">
                        Here's a helpful tip for using MDX effectively.
                      </Callout>
                      <Callout type="warning">
                        Be careful when mixing Markdown and JSX syntax.
                      </Callout>
                      <Callout type="success">
                        MDX is successfully rendering React components!
                      </Callout>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Benefits of MDX</h2>
                    <ol className="list-decimal list-inside space-y-2">
                      <li><strong>Familiar Syntax</strong>: Use Markdown for content structure</li>
                      <li><strong>Component Integration</strong>: Embed React components seamlessly</li>
                      <li><strong>Type Safety</strong>: Full TypeScript support</li>
                      <li><strong>Performance</strong>: Server-side rendering with Next.js</li>
                      <li><strong>Flexibility</strong>: Customize components for your needs</li>
                    </ol>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="source" className="mt-6">
              <CodeBlock
                language="markdown"
                code={mdxContent}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-5 w-5 text-blue-500" />
              Easy to Learn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              If you know Markdown and React, you already know MDX. 
              The syntax is intuitive and builds on familiar concepts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
              Powerful
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Combine the simplicity of Markdown with the full power of React components 
              and the JavaScript ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Production Ready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Used by major companies and frameworks. Excellent performance, 
              SEO, and developer experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
