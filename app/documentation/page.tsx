import { Calendar, Contact, GuitarIcon, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider, // Importar o SidebarProvider
} from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { FaTools } from "react-icons/fa";

// Sidebar items
const items = [
  {
    title: "Microphone Setup",
    url: "#microphone-setup",
    icon: GuitarIcon,
  },
  {
    title: "Become a Teacher",
    url: "#become-teacher",
    icon: Inbox,
  },
  {
    title: "Project Features",
    url: "#project-features",
    icon: Calendar,
  },
  {
    title: "Development Tools",
    url: "#development-tools",
    icon: FaTools,
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Contact,
  },
];

const DocumentationPage = async () => {
  return (
    <SidebarProvider> 
      <div className="flex h-screen">
        <Sidebar className="w-64 h-full">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Documentation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <Card className="p-4 h-[90vh] flex-1 relative top-0 pb-10 overflow-y-auto scrollbar-none shadow-none">
          <h1 id="microphone-setup" className="text-xl font-semibold mb-4">
            Microphone Setup in the Browser
          </h1>
          <p>
            To use the real-time feedback features in ProjectA, you need to
            allow access to your device&apos;s microphone in your browser. Follow
            the steps below to configure it:
          </p>
          <h2 className="text-lg font-semibold mt-4">Google Chrome</h2>
          <ul className="list-disc ml-6">
            <li>Open Google Chrome.</li>
            <li>Go to the ProjectA page.</li>
            <li>Click the lock icon next to the URL.</li>
            <li>Select &quot;Site Settings&quot;.</li>
            <li>
              Under &quot;Permissions&quot;, find the &quot;Microphone&quot;
              option and set it to &quot;Allow&quot;.
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-4">Mozilla Firefox</h2>
          <ul className="list-disc ml-6">
            <li>Open Mozilla Firefox.</li>
            <li>Go to the ProjectA page.</li>
            <li>
              A message will appear asking for permission to access the
              microphone. Click &quot;Allow&quot;.
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-4">Microsoft Edge</h2>
          <ul className="list-disc ml-6">
            <li>Open Microsoft Edge.</li>
            <li>Go to the ProjectA page.</li>
            <li>Click the lock icon next to the URL.</li>
            <li>Select &quot;Permissions&quot;, then Microphone.</li>
            <li>Choose &quot;Allow&quot;.</li>
          </ul>

          <h1 id="become-teacher" className="text-xl font-semibold mt-8">
            Want to Become a Teacher?
          </h1>
          <p>
            Interested in teaching at ProjectA? We are always looking for
            talented individuals to share their musical expertise with our
            students.
          </p>
          <h2 className="text-lg font-semibold mt-4">How to Apply:</h2>
          <p>
            Contact our team using the details below, providing your background
            and musical specialties. Our team will get back to you with more
            information on the application process.
          </p>
          <p className="mt-2">Email: projecta.contactt@gmail.com</p>
          <p>Phone: +55 (45) 99840-5219</p>

          <h2 className="text-lg font-semibold mt-4">Requirements:</h2>
          <ul className="list-disc ml-6">
            <li>Experience in music or music teaching.</li>
            <li>
              Willingness to create and manage courses, activities, and
              interactive challenges.
            </li>
            <li>
              Good communication skills and a passion for training new
              musicians.
            </li>
          </ul>

          <h1 id="project-features" className="text-xl font-semibold mt-8">
            About the Project
          </h1>
          <p>
            ProjectA is an innovative music school that employs effective
            teaching methods to provide a comprehensive and immersive learning
            experience. We offer a wide range of resources for both students and
            teachers, from course registration to interaction with musical
            activities and challenges.
          </p>
          <h2 className="text-lg font-semibold mt-4">Explore the features:</h2>
          <ul className="list-disc ml-6">
            <li>User registration and authentication.</li>
            <li>Music library with comprehensive details and YouTube links.</li>
            <li>Instrument tuning tools.</li>
            <li>Real-time song playing with feedback.</li>
            <li>Scoring system and performance history.</li>
            <li>
              Course registration and access with video and text materials.
            </li>
            <li>Course management for teachers.</li>
            <li>Interactive activities with immediate feedback.</li>
          </ul>

          <h1 id="development-tools" className="text-xl font-semibold mt-8">
            Tools used in development
          </h1>
          <ul className="list-disc ml-6">
            <li>Next.js</li>
            <li>Prisma</li>
            <li>Auth.js v5</li>
            <li>Three.js</li>
            <li>Tailwind CSS</li>
            <li>Shadcn/UI</li>
          </ul>

          <h1 id="contact" className="text-xl font-semibold mt-8">
            Contact
          </h1>
          <p>
            Developer - Marcelo Mazzonetto - projecta.contactt@gmail.com
          </p>
          <p>Phone - +55 (45) 99840-5219</p>
        </Card>
      </div>
    </SidebarProvider>
  );
};

export default DocumentationPage;
