// ABOUTME: Demo component showcasing the design system usage

import { useTheme } from '@/design-system';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Toggle } from '@/components/ui/toggle';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Info, Settings, ChevronDown } from 'lucide-react';

export function ThemeDemo() {
  const [theme, setTheme] = useTheme();
  
  return (
    <div className="p-spacing-8 space-y-spacing-8 min-h-screen bg-layer">
      {/* Header */}
      <div className="space-y-spacing-4">
        <h1 className="win-type-title-large text-text-primary">Windows Design System</h1>
        <p className="win-type-body-large text-text-secondary">
          A comprehensive showcase of Windows 11 design components
        </p>
      </div>

      {/* Theme Switcher */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Selection</CardTitle>
          <CardDescription>Choose between light, dark, and high contrast themes</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-spacing-4">
          <Button 
            onClick={() => setTheme('light')}
            variant={theme === 'light' ? 'default' : 'outline'}
          >
            Light
          </Button>
          <Button 
            onClick={() => setTheme('dark')}
            variant={theme === 'dark' ? 'default' : 'outline'}
          >
            Dark
          </Button>
          <Button 
            onClick={() => setTheme('contrast')}
            variant={theme === 'contrast' ? 'default' : 'outline'}
          >
            High Contrast
          </Button>
        </CardContent>
      </Card>

      {/* Component Showcase Tabs */}
      <Tabs defaultValue="form-controls" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="form-controls">Form Controls</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
        </TabsList>

        {/* Form Controls Tab */}
        <TabsContent value="form-controls" className="space-y-spacing-6">
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
              <CardDescription>Input elements with Windows 11 styling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-spacing-6">
              {/* Buttons */}
              <div className="space-y-spacing-2">
                <Label>Buttons</Label>
                <div className="flex gap-spacing-2">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-2 gap-spacing-4">
                <div className="space-y-spacing-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-spacing-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" />
                </div>
              </div>

              {/* Textarea */}
              <div className="space-y-spacing-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." />
              </div>

              {/* Select */}
              <div className="space-y-spacing-2">
                <Label>Select Option</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Checkboxes and Radio */}
              <div className="grid grid-cols-2 gap-spacing-6">
                <div className="space-y-spacing-4">
                  <Label>Checkboxes</Label>
                  <div className="space-y-spacing-2">
                    <div className="flex items-center space-x-spacing-2">
                      <Checkbox id="check1" />
                      <Label htmlFor="check1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-spacing-2">
                      <Checkbox id="check2" />
                      <Label htmlFor="check2">Option 2</Label>
                    </div>
                  </div>
                </div>
                <div className="space-y-spacing-4">
                  <Label>Radio Group</Label>
                  <RadioGroup defaultValue="radio1">
                    <div className="flex items-center space-x-spacing-2">
                      <RadioGroupItem value="radio1" id="radio1" />
                      <Label htmlFor="radio1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-spacing-2">
                      <RadioGroupItem value="radio2" id="radio2" />
                      <Label htmlFor="radio2">Option 2</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Switch and Toggle */}
              <div className="grid grid-cols-2 gap-spacing-6">
                <div className="space-y-spacing-2">
                  <Label>Switch</Label>
                  <div className="flex items-center space-x-spacing-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </div>
                <div className="space-y-spacing-2">
                  <Label>Toggle</Label>
                  <div className="flex gap-spacing-2">
                    <Toggle>Bold</Toggle>
                    <Toggle>Italic</Toggle>
                    <Toggle>Underline</Toggle>
                  </div>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-spacing-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Layout Tab */}
        <TabsContent value="layout" className="space-y-spacing-6">
          {/* Typography */}
          <Card>
            <CardHeader>
              <CardTitle>Typography Scale</CardTitle>
              <CardDescription>Windows 11 type ramp</CardDescription>
            </CardHeader>
            <CardContent className="space-y-spacing-4">
              <h1 className="win-type-display text-text-primary">Display</h1>
              <h2 className="win-type-title-large text-text-primary">Title Large</h2>
              <h3 className="win-type-title text-text-primary">Title</h3>
              <h4 className="win-type-subtitle text-text-primary">Subtitle</h4>
              <p className="win-type-body-large text-text-secondary">Body Large</p>
              <p className="win-type-body-large-strong text-text-primary">Body Large Strong</p>
              <p className="win-type-body text-text-secondary">Body</p>
              <p className="win-type-body-strong text-text-primary">Body Strong</p>
              <p className="win-type-caption text-text-tertiary">Caption</p>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
              <CardDescription>Expandable content sections</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Section 1</AccordionTrigger>
                  <AccordionContent>
                    Content for the first section goes here.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Section 2</AccordionTrigger>
                  <AccordionContent>
                    Content for the second section goes here.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Color Swatches */}
          <Card>
            <CardHeader>
              <CardTitle>Color System</CardTitle>
              <CardDescription>Windows 11 color tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-spacing-4">
                <div className="p-spacing-4 bg-fill-accent text-text-on-accent rounded-medium shadow-elevation-low">
                  <p className="win-type-body-strong">Accent</p>
                </div>
                <div className="p-spacing-4 bg-fill-control rounded-medium border border-stroke-default shadow-elevation-low">
                  <p className="win-type-body-strong text-text-primary">Control</p>
                </div>
                <div className="p-spacing-4 bg-layer rounded-medium border border-stroke-default shadow-elevation-low">
                  <p className="win-type-body-strong text-text-primary">Layer</p>
                </div>
                <div className="p-spacing-4 bg-solid rounded-medium border border-stroke-divider shadow-elevation-low">
                  <p className="win-type-body-strong text-text-primary">Solid</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback" className="space-y-spacing-6">
          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-spacing-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Alerts</CardTitle>
              <CardDescription>System notifications and messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-spacing-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>This is a default informational alert.</AlertDescription>
              </Alert>
              <Alert variant="success">
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>Operation completed successfully.</AlertDescription>
              </Alert>
              <Alert variant="attention">
                <AlertTitle>Attention</AlertTitle>
                <AlertDescription>Please review this important information.</AlertDescription>
              </Alert>
              <Alert variant="caution">
                <AlertTitle>Caution</AlertTitle>
                <AlertDescription>Proceed with caution.</AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>An error occurred while processing your request.</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>Loading and progress indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-spacing-4">
              <Progress value={33} />
              <Progress value={66} />
              <Progress value={100} />
            </CardContent>
          </Card>

          {/* Dialog Demo */}
          <Card>
            <CardHeader>
              <CardTitle>Dialogs & Overlays</CardTitle>
              <CardDescription>Modal dialogs and tooltips</CardDescription>
            </CardHeader>
            <CardContent className="space-y-spacing-4">
              <div className="flex gap-spacing-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        This is a Windows 11 styled dialog with proper elevation and backdrop.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover for Tooltip</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a Windows 11 tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Navigation Tab */}
        <TabsContent value="navigation" className="space-y-spacing-6">
          <Card>
            <CardHeader>
              <CardTitle>Navigation Components</CardTitle>
              <CardDescription>Menus and navigation elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-spacing-4">
                {/* Dropdown Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Options <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Account</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sign out</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Separator Example */}
          <Card>
            <CardHeader>
              <CardTitle>Content Separation</CardTitle>
              <CardDescription>Visual dividers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-spacing-4">
                <p className="win-type-body text-text-secondary">Content above separator</p>
                <Separator />
                <p className="win-type-body text-text-secondary">Content below separator</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}