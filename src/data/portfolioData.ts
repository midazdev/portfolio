export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Fullstack & Web' | 'Backend & Distributed' | 'Performance & Architecture' | 'AI & Tooling';
  tagline: string;
  problem: string;
  solution: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    iconName: string;
    note: string;
  }[];
}

export interface CodeSnippet {
  id: string;
  language: string;
  title: string;
  description: string;
  stackBadge: string;
  code: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  type: 'client' | 'gateway' | 'service' | 'cache' | 'database' | 'queue';
  role: string;
  tech: string;
  throughput: string;
  resilience: string;
  details: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Dato' Samuel F.",
    handle: "midaz-dev",
    company: "Midaz Dev",
    role: "Founder & Principal AI Systems Architect",
    tagline: "Founder of Midaz Dev. Engineering resilient AI governance frameworks, high-throughput microservices, and modern web systems.",
    location: "Indonesia (GMT+7) / Remote Worldwide",
    availability: "Available for High-Impact Projects & Tech Advisory",
    bio: `Technical Founder and Principal Architect with specialized expertise in Enterprise AI Governance, high-throughput asynchronous backends (Python, FastAPI), and modern web platforms (Next.js, Astro). Leading Midaz Dev in architecting clean, secure, and zero-downtime systems.`,
    stats: [
      { label: "Years of Experience", value: "6+" },
      { label: "Architecture Scalability", value: "10M+ Req/Day" },
      { label: "Core Web Vitals Score", value: "98-100" },
      { label: "Uptime Standard", value: "99.99%" },
    ],
    socials: {
      github: "https://github.com/midazdev",
      linkedin: "https://www.linkedin.com/in/datosamuel",
      email: "samuel@midaz.dev",
    }
  },

  featuredSkills: [
    { name: "Next.js", category: "Fullstack / Frontend", tag: "App Router / SSR / RSC", color: "from-blue-500 to-cyan-400" },
    { name: "Python & FastAPI", category: "Backend / Async", tag: "AsyncIO / Pydantic v2 / Clean Arch", color: "from-emerald-500 to-teal-400" },
    { name: "Astro", category: "Frontend / Islands", tag: "Zero-JS / Hybrid SSR / Markdown", color: "from-purple-500 to-pink-500" },
    { name: "Tailwind CSS", category: "Design Systems", tag: "Responsive UI / Custom Tokens", color: "from-cyan-400 to-blue-600" },
    { name: "PostgreSQL & Redis", category: "Data & Caching", tag: "Distributed Cache / Query Opt", color: "from-amber-400 to-orange-500" },
    { name: "Docker & CI/CD", category: "DevOps & Cloud", tag: "Automated Pipelines / Containerization", color: "from-indigo-500 to-sky-400" },
  ],

  skillCategories: [
    {
      title: "Backend & Systems Engineering",
      description: "Designing high-throughput asynchronous services, resilient database schemas, and microservice topologies.",
      skills: [
        { name: "Python (AsyncIO / Pydantic)", level: "Expert", iconName: "Terminal", note: "Concurrent task pipelines, memory profiling, type-safe models." },
        { name: "FastAPI", level: "Expert", iconName: "Zap", note: "High-performance RESTful APIs, dependency injection, OAuth2/JWT auth." },
        { name: "PostgreSQL & SQLAlchemy", level: "Advanced", iconName: "Database", note: "Indexing strategies, transactional integrity, connection pooling." },
        { name: "Redis & Celery / RQ", level: "Advanced", iconName: "Cpu", note: "Distributed caching, pub/sub queues, rate-limiting algorithms." },
        { name: "Clean Architecture & DDD", level: "Expert", iconName: "Layers", note: "Decoupled domain layers, repository patterns, testable business logic." },
      ]
    },
    {
      title: "Modern Frontend & Web Performance",
      description: "Delivering responsive, accessible, and ultra-fast user interfaces with sub-second page loads.",
      skills: [
        { name: "Next.js 14 / 15", level: "Expert", iconName: "Globe", note: "React Server Components, Server Actions, Dynamic Streaming & Caching." },
        { name: "Astro Framework", level: "Expert", iconName: "Rocket", note: "Islands Architecture, zero runtime overhead, content collections." },
        { name: "Tailwind CSS & UI Systems", level: "Expert", iconName: "Layout", note: "Design system tokens, mobile-first responsive layouts, dark/light themes." },
        { name: "TypeScript", level: "Expert", iconName: "Code2", note: "Strict type safety, generic utility types, end-to-end type sharing." },
        { name: "Web Vitals & SEO", level: "Advanced", iconName: "Gauge", note: "LCP/INP optimization, edge caching headers, structured schema markup." },
      ]
    },
    {
      title: "DevOps, Cloud & Architecture",
      description: "Automating delivery pipelines, container orchestrations, and infrastructure observability.",
      skills: [
        { name: "Docker & Containerization", level: "Advanced", iconName: "Box", note: "Multi-stage minimal builds, security hardening, docker-compose." },
        { name: "GitHub Actions CI/CD", level: "Advanced", iconName: "GitBranch", note: "Automated linting, unit/integration testing, multi-env deployment." },
        { name: "Nginx & Reverse Proxies", level: "Advanced", iconName: "Server", note: "SSL/TLS offloading, load balancing, gzip/brotli compression." },
        { name: "System Monitoring", level: "Proficient", iconName: "Activity", note: "Structured JSON logging, Prometheus metrics, health probe alerts." },
      ]
    }
  ] as SkillCategory[],

  caseStudies: [
    {
      id: "fastapi-distributed-gateway",
      title: "High-Throughput Asynchronous Microservices Gateway",
      category: "Backend & Distributed",
      tagline: "Ultra-low latency routing and authentication engine handling 8,000+ RPS with sub-25ms response time.",
      problem: "Legacy monolithic APIs struggled under concurrent flash-traffic spikes, resulting in connection pool exhaustion, elevated 504 gateway timeouts, and sluggish user response times.",
      solution: "Engineered an asynchronous API Gateway using Python FastAPI with Uvicorn worker clustering, token-bucket rate limiting in Redis, and decoupled domain services with strict Pydantic v2 validation.",
      architecture: [
        "FastAPI Async Endpoints with non-blocking I/O",
        "Redis Distributed Cache for JWT validation and Rate Limiting",
        "PostgreSQL Connection Pooler (PgBouncer) for database scale",
        "Background Task Offloading via Async Workers"
      ],
      metrics: [
        { label: "Throughput Capacity", value: "8,500 RPS" },
        { label: "P95 Latency", value: "< 24ms" },
        { label: "Gateway 5xx Errors", value: "0.001%" },
        { label: "CPU Efficiency", value: "+65%" },
      ],
      tags: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "AsyncIO"],
      highlights: [
        "Zero memory leak event loop architecture",
        "Centralized structured JSON telemetry and correlation IDs",
        "Automated Swagger / OpenAPI 3.1 documentation generation"
      ]
    },
    {
      id: "nextjs-multi-tenant-platform",
      title: "Modern Next.js Multi-Tenant Enterprise Application",
      category: "Fullstack & Web",
      tagline: "Dynamic server-rendered dashboard with real-time analytics, optimistic UI mutations, and fluid interactions.",
      problem: "Client-side heavy SPA suffered from sluggish initial load times (3.8s LCP), SEO limitations, and high bundle size on mobile networks.",
      solution: "Rebuilt the frontend architecture using Next.js App Router with React Server Components (RSC) to render heavy data on the server, while streaming client components for instant responsiveness.",
      architecture: [
        "Next.js App Router with Route Handlers & Server Actions",
        "Tailwind CSS custom design system with zero CSS bloat",
        "Optimistic UI state updates for immediate user feedback",
        "Edge Middleware for localized multi-tenant routing"
      ],
      metrics: [
        { label: "Initial LCP", value: "0.8s" },
        { label: "Bundle Size Reduced", value: "-72%" },
        { label: "Lighthouse Performance", value: "99 / 100" },
        { label: "Time to Interactive", value: "1.1s" },
      ],
      tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Server Actions"],
      highlights: [
        "End-to-end type safety between backend and frontend",
        "Fine-grained data revalidation with Next.js tags & cache",
        "Accessible WCAG 2.1 AA compliant component system"
      ]
    },
    {
      id: "astro-islands-publishing-engine",
      title: "Ultra-Fast Content & Marketing Engine with Astro",
      category: "Performance & Architecture",
      tagline: "Content-driven publishing platform achieving perfect 100/100 Core Web Vitals with Zero JavaScript baseline.",
      problem: "Heavy marketing pages bloated with unnecessary client JavaScript were hurting conversion rates, search engine rankings, and mobile battery life.",
      solution: "Leveraged Astro's Island Architecture to compile pages into pure static HTML, only hydrating interactive islands (e.g. search, newsletter, dark mode toggle) when visible in the viewport.",
      architecture: [
        "Astro Static Site Generation (SSG) with Markdown/MDX Collections",
        "Selective Component Hydration (client:visible / client:idle)",
        "Tailwind CSS utility styling compiled ahead-of-time",
        "Automated CI/CD deployment to Edge CDN with instant cache purge"
      ],
      metrics: [
        { label: "JavaScript Shipped", value: "0 KB (Base)" },
        { label: "Google PageSpeed", value: "100 / 100" },
        { label: "Build Time", value: "< 14s" },
        { label: "Bounce Rate Reduced", value: "35%" },
      ],
      tags: ["Astro", "TypeScript", "Tailwind CSS", "Edge CDN", "Markdown"],
      highlights: [
        "Instantaneous transitions across content pages",
        "Automated SEO OpenGraph image generation at build time",
        "Robust type-checked content collections with Zod schema validation"
      ]
    },
    {
      id: "event-driven-task-pipeline",
      title: "Fault-Tolerant Distributed Task & Event Pipeline",
      category: "Backend & Distributed",
      tagline: "Asynchronous task orchestration engine processing bulk operations with automatic retries and dead-letter queues.",
      problem: "Long-running synchronous I/O operations (PDF generation, webhooks, data export) blocked web threads and caused intermittent timeout cascades.",
      solution: "Designed an event-driven worker pipeline using Python background consumers, Redis message queues, exponential backoff retries, and transactional outbox guarantees.",
      architecture: [
        "FastAPI producer submitting job tokens to Redis Queue",
        "Autonomous Python worker pool scaling dynamically",
        "Idempotency keys ensuring exactly-once execution semantics",
        "Dead-letter queues with automated anomaly alerts"
      ],
      metrics: [
        { label: "Jobs Processed Daily", value: "250,000+" },
        { label: "Job Failure Rate", value: "< 0.02%" },
        { label: "Web Request Latency", value: "12ms" },
        { label: "Worker Auto-Recovery", value: "100%" },
      ],
      tags: ["Python", "Redis", "Celery", "FastAPI", "Docker", "Monitoring"],
      highlights: [
        "Zero dropped jobs during server restarts or deployments",
        "Real-time progress reporting to client via WebSockets",
        "Comprehensive health probes and automated worker scaling"
      ]
    }
  ] as ProjectCaseStudy[],

  codeSnippets: [
    {
      id: "fastapi-service",
      language: "python",
      title: "FastAPI Clean Architecture Service",
      description: "Asynchronous dependency-injected endpoint with rate limiting, strict Pydantic v2 validation, and error encapsulation.",
      stackBadge: "Python 3.12 / FastAPI",
      code: `from fastapi import FastAPI, Depends, HTTPException, status
from pydantic import BaseModel, Field, EmailStr
from typing import Annotated
import asyncio

app = FastAPI(title="Core Gateway Service", version="2.4.0")

class TelemetryPayload(BaseModel):
    client_id: str = Field(..., min_length=4, max_length=64)
    metric_name: str = Field(..., pattern="^[a-z_]+$")
    value: float = Field(..., ge=0.0)
    tags: dict[str, str] = Field(default_factory=dict)

async def verify_rate_limit(client_id: str) -> bool:
    """Simulate Redis sliding-window token bucket verification."""
    await asyncio.sleep(0.002)  # Non-blocking async check
    return True

@app.post("/v1/telemetry/ingest", status_code=status.HTTP_202_ACCEPTED)
async def ingest_telemetry(
    payload: TelemetryPayload,
    is_allowed: Annotated[bool, Depends(verify_rate_limit)]
):
    """
    Ingest high-frequency telemetry events with non-blocking I/O.
    Ensures zero blocking on main event loop.
    """
    if not is_allowed:
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="Rate limit quota exceeded"
        )
        
    # Dispatch event to background queue or outbox table
    return {
        "status": "queued",
        "metric": payload.metric_name,
        "processed_async": True
    }`
    },
    {
      id: "nextjs-server-action",
      language: "typescript",
      title: "Next.js 15 Server Action with Type Safety",
      description: "Type-safe server action utilizing Zod validation, optimistic UI compatibility, and automatic cache revalidation.",
      stackBadge: "Next.js / TypeScript",
      code: `'use server';

import { revalidateTag } from 'next/cache';
import { z } from 'zod';

const ProjectFilterSchema = z.object({
  category: z.enum(['all', 'backend', 'frontend', 'architecture']),
  searchTerm: z.string().max(50).optional(),
});

export type FilterState = {
  success: boolean;
  message?: string;
  count?: number;
};

export async function filterShowcaseAction(
  prevState: FilterState, 
  formData: FormData
): Promise<FilterState> {
  const rawData = {
    category: formData.get('category'),
    searchTerm: formData.get('query') || undefined,
  };

  const parseResult = ProjectFilterSchema.safeParse(rawData);
  if (!parseResult.success) {
    return {
      success: false,
      message: 'Invalid filter parameters provided.',
    };
  }

  // Invalidate specific cache tag for instant SSR updates
  revalidateTag('portfolio-projects');

  return {
    success: true,
    message: \`Filtered by \${parseResult.data.category}\`,
    count: 4,
  };
}`
    },
    {
      id: "astro-island-demo",
      language: "astro",
      title: "Astro Island Component (Zero-JS Static Fallback)",
      description: "Demonstrates Astro's partial hydration architecture: static HTML by default with selective client hydration.",
      stackBadge: "Astro / React Island",
      code: `---
// src/components/SystemHealthBanner.astro
import StatusWidget from './StatusWidget.jsx';
import { getSystemMetrics } from '../lib/metrics';

// Executed at build time (SSG) or request time (SSR) on server only
const initialMetrics = await getSystemMetrics();
---

<div class="border border-slate-800 rounded-xl bg-slate-900/60 p-4">
  <div class="flex items-center justify-between">
    <div>
      <h3 class="text-sm font-semibold text-white">System Architecture Status</h3>
      <p class="text-xs text-slate-400">Zero JS runtime footprint for static content</p>
    </div>
    <!-- Hydrates interactive React island only when visible on screen -->
    <StatusWidget client:visible initialData={initialMetrics} />
  </div>
</div>`
    }
  ] as CodeSnippet[],

  architectureTopology: [
    {
      id: "edge-cdn",
      title: "1. Edge CDN & WAF",
      subtitle: "Cloudflare / Vercel Edge",
      type: "client",
      role: "SSL termination, global DDoS mitigation, and static asset caching.",
      tech: "Edge Networks / HTTP/3",
      throughput: "Sub-10ms TTFB globally",
      resilience: "100% Anycast redundancy",
      details: "Routes dynamic API requests to FastAPI origin while serving cached Next.js & Astro static assets directly from edge locations closest to the user."
    },
    {
      id: "api-gateway",
      title: "2. API Gateway & Auth",
      subtitle: "Reverse Proxy & Rate Limiter",
      type: "gateway",
      role: "Authentication verification, payload sanity checks, and circuit breaking.",
      tech: "FastAPI / Nginx / Redis",
      throughput: "10,000+ RPS per node",
      resilience: "Auto-scaling pool with health probes",
      details: "Performs stateless JWT cryptographic verification and token-bucket rate limiting before forwarding valid requests to downstream microservices."
    },
    {
      id: "app-services",
      title: "3. Microservices Core",
      subtitle: "Asynchronous Python & Next.js",
      type: "service",
      role: "Business domain execution, transactions, and server-side data composition.",
      tech: "Python AsyncIO / Next.js RSC",
      throughput: "20ms avg internal latency",
      resilience: "Decoupled domain layers (Clean Arch)",
      details: "Follows Clean Architecture principles. Domain entities and use cases are completely independent of frameworks, databases, or external I/O."
    },
    {
      id: "caching-layer",
      title: "4. Multi-Tier Cache",
      subtitle: "In-Memory & Distributed",
      type: "cache",
      role: "Hot key caching, distributed lock coordination, and query acceleration.",
      tech: "Redis Cluster / Memory Cache",
      throughput: "< 1.5ms read latency",
      resilience: "Sentinel / Redis Cluster failover",
      details: "Prevents cache-stampede using probabilistic early expiration (XFetch) and distributed mutex locks for high-demand resources."
    },
    {
      id: "persistence-layer",
      title: "5. Relational Database",
      subtitle: "Primary-Replica Cluster",
      type: "database",
      role: "ACID compliant persistence, relational indexing, and transactional integrity.",
      tech: "PostgreSQL 16 / Connection Pooling",
      throughput: "Optimized B-tree & GIN indices",
      resilience: "Streaming replication & WAL archiving",
      details: "Configured with PgBouncer connection pooling to efficiently manage hundreds of concurrent worker connections without exhausting server memory."
    },
    {
      id: "async-workers",
      title: "6. Event & Task Workers",
      subtitle: "Background Processing Engine",
      type: "queue",
      role: "Non-blocking execution of heavy compute, emails, reports, and data pipelines.",
      tech: "Redis Streams / Celery Workers",
      throughput: "Elastic worker concurrency",
      resilience: "Dead-Letter Queue (DLQ) & auto-retries",
      details: "Guarantees task completion with exponential backoff and idempotency keys to ensure actions are never duplicated even during worker crashes."
    }
  ] as ArchitectureNode[],

  terminalCommands: {
    help: "Available commands:\n  • about        - Summary of background & engineering focus\n  • skills       - List verified competencies (Next.js, Python, Astro, FastAPI...)\n  • projects     - Overview of sanitized architectural case studies\n  • architecture - View distributed system design philosophy\n  • contact      - Get verified contact channels\n  • clear        - Clear terminal screen",
    about: "Executive Profile:\n  • Name: Dato' Samuel F.\n  • Role: Founder & Principal AI Systems Architect\n  • Organization: Midaz Dev\n  • Focus: Enterprise AI Governance, Scalable Backends (Python/FastAPI), High-Perf Web (Next.js/Astro)\n  • Philosophy: Clean Architecture, Zero-Downtime, Resilient Governance, High Observability\n  • Location: Indonesia (GMT+7) / Remote Worldwide",
    skills: "Core Competencies:\n  ⚡ Fullstack:  Next.js 15, React 19, TypeScript, Astro, Tailwind CSS\n  ⚡ Backend:    Python 3.12, FastAPI, AsyncIO, Pydantic v2, REST/gRPC\n  ⚡ Data/Cache: PostgreSQL, Redis, SQLAlchemy, Connection Pooling\n  ⚡ DevOps:     Docker, GitHub Actions CI/CD, Nginx, Linux",
    projects: "Featured Sanitized Case Studies:\n  1. High-Throughput Asynchronous Microservices Gateway (FastAPI / Redis / 8k RPS)\n  2. Modern Next.js Multi-Tenant Enterprise Application (0.8s LCP / RSC)\n  3. Ultra-Fast Content & Marketing Engine (Astro / Zero JS Baseline)\n  4. Fault-Tolerant Distributed Task Pipeline (Python / Celery / DLQ)",
    architecture: "Architecture Principles:\n  ✓ Separation of Concerns (Domain, Application, Infrastructure layers)\n  ✓ Asynchronous & Non-blocking I/O for scalable throughput\n  ✓ Graceful degradation, circuit breakers, and rate limiters\n  ✓ 100% Type safety from database models to frontend interfaces",
    contact: "Contact Channels:\n  • Email: samuel@midaz.dev\n  • LinkedIn: https://www.linkedin.com/in/datosamuel\n  • GitHub: https://github.com/midazdev\n  • Status: Open for technical advisory, system architecture, and AI governance consultations",
  } as Record<string, string>
};
