import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">About TaskFlow</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Helping you achieve clarity and focus, one task at a time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide a simple, intuitive, and powerful tool that helps individuals and teams organize their work and life, reducing stress and increasing productivity.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We envision a world where everyone can focus on what truly matters, empowered by tools that seamlessly integrate into their workflow and bring a sense of calm and control.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="mt-4">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are a passionate group of designers, developers, and product thinkers dedicated to building high-quality software that makes a real difference in people's lives.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;