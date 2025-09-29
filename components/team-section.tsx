import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Twitter, Linkedin } from 'lucide-react'

// Simulate slow data fetching
async function getTeamMembers() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  return [
    {
      id: 1,
      name: 'John Doe',
      role: 'Lead Developer',
      bio: 'Full-stack developer with 8+ years of experience in React and Next.js.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
      social: {
        github: 'johndoe',
        twitter: 'johndoe',
        linkedin: 'johndoe',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Frontend Architect',
      bio: 'UI/UX expert specializing in modern React patterns and performance optimization.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      skills: ['React', 'Design Systems', 'Performance', 'Accessibility'],
      social: {
        github: 'janesmith',
        twitter: 'janesmith',
        linkedin: 'janesmith',
      },
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist focused on deployment, monitoring, and scalability.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      social: {
        github: 'mikejohnson',
        twitter: 'mikejohnson',
        linkedin: 'mikejohnson',
      },
    },
  ]
}

export async function TeamSection() {
  const teamMembers = await getTeamMembers()

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="text-center">
            <CardHeader>
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {member.bio}
              </p>
              
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex justify-center space-x-4">
                <a
                  href={`https://github.com/${member.social.github}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={`https://twitter.com/${member.social.twitter}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href={`https://linkedin.com/in/${member.social.linkedin}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


