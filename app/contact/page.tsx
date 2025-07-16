'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Have questions about the boilerplate? Want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Why Contact Us?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-xl">💡</span>
                <div>
                  <h3 className="font-semibold">Feature Requests</h3>
                  <p className="text-sm text-foreground/70">
                    Suggest new features or improvements to make this boilerplate even better.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">🐛</span>
                <div>
                  <h3 className="font-semibold">Bug Reports</h3>
                  <p className="text-sm text-foreground/70">
                    Found an issue? Let us know so we can fix it quickly.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">🤝</span>
                <div>
                  <h3 className="font-semibold">Collaboration</h3>
                  <p className="text-sm text-foreground/70">
                    Interested in contributing or working together on projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a href="https://github.com" className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors">
                <span>📱</span>
                <span>GitHub Repository</span>
              </a>
              <a href="https://nextjs.org/docs" className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors">
                <span>📚</span>
                <span>Next.js Documentation</span>
              </a>
              <a href="https://tailwindcss.com" className="flex items-center space-x-2 text-foreground/70 hover:text-foreground transition-colors">
                <span>🎨</span>
                <span>Tailwind CSS</span>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <Input
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="flex w-full rounded-lg border border-foreground/20 bg-background px-3 py-2 text-sm placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Tell us more about your message..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-600 text-sm">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-600 text-sm">
                    ❌ Something went wrong. Please try again later.
                  </p>
                </div>
              )}

              <Button 
                type="submit" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 