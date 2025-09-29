'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const sampleData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 78 },
  { month: 'Mar', value: 90 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 95 },
  { month: 'Jun', value: 88 },
]

export function InteractiveChart() {
  const [data, setData] = useState(sampleData)
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null)

  const maxValue = Math.max(...data.map(d => d.value))

  const generateRandomData = () => {
    setData(data.map(item => ({
      ...item,
      value: Math.floor(Math.random() * 100) + 20
    })))
    setSelectedMonth(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Interactive Chart Component</CardTitle>
        <CardDescription>
          This is a React component embedded in MDX. Click on bars to see details.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart */}
          <div className="h-48 flex items-end justify-between space-x-2 p-4 bg-muted/50 rounded-lg">
            {data.map((item) => (
              <div
                key={item.month}
                className="flex flex-col items-center space-y-2 flex-1"
              >
                <div
                  className={`w-full rounded-t transition-all duration-300 cursor-pointer ${
                    selectedMonth === item.month
                      ? 'bg-primary'
                      : 'bg-primary/70 hover:bg-primary'
                  }`}
                  style={{ height: `${(item.value / maxValue) * 120}px` }}
                  onClick={() => setSelectedMonth(
                    selectedMonth === item.month ? null : item.month
                  )}
                />
                <span className="text-xs font-medium">{item.month}</span>
              </div>
            ))}
          </div>

          {/* Selected Data */}
          {selectedMonth && (
            <div className="p-3 bg-primary/10 rounded-lg">
              <p className="text-sm">
                <strong>{selectedMonth}:</strong> {data.find(d => d.month === selectedMonth)?.value} units
              </p>
            </div>
          )}

          {/* Controls */}
          <div className="flex justify-center">
            <Button onClick={generateRandomData} variant="outline" size="sm">
              Generate Random Data
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


