import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  title?: string;
};

function Svg({
  children,
  className,
  title,
  viewBox = "0 0 24 24",
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  viewBox?: string;
}): React.ReactElement {
  return (
    <svg
      viewBox={viewBox}
      className={cn("size-5", className)}
      role="img"
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

const logos: Record<string, (props: LogoProps) => React.ReactElement> = {
  github: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </Svg>
  ),
  gitlab: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M23.955 13.587l-1.237-3.81.002-.001-3.323-10.232a.851.851 0 0 0-.822-.586.84.84 0 0 0-.804.606l-2.247 6.919H8.476L6.229.564a.84.84 0 0 0-.804-.606.851.851 0 0 0-.822.586L1.28 9.777l.002.001-1.236 3.81a.603.603 0 0 0 .219.675l11.737 8.529.004.003.003-.002 11.734-8.528a.6.6 0 0 0 .22-.676"
      />
    </Svg>
  ),
  bitbucket: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"
      />
    </Svg>
  ),
  jira: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M11.571 11.513H0A5.57 5.57 0 005.571 5.94h5.99V5.9A5.57 5.57 0 0017.13.33v5.99a5.57 5.57 0 01-5.56 5.193M12.43 12.487H24a5.57 5.57 0 01-5.571 5.572h-5.99v.041A5.57 5.57 0 016.87 23.67v-5.99a5.57 5.57 0 015.56-5.193"
      />
    </Svg>
  ),
  linear: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M2.886 4.18A11.95 11.95 0 0 1 12 0c6.627 0 12 5.373 12 12 0 3.475-1.477 6.605-3.84 8.79L2.886 4.18ZM1.492 5.95 18.05 22.508A11.95 11.95 0 0 1 12 24C5.373 24 0 18.627 0 12c0-2.148.565-4.164 1.492-5.95Z"
      />
    </Svg>
  ),
  "azure-boards": ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M0 10.584l8.518-2.113.002-.002L24 0v24L8.478 18.622v.002L0 13.417zM9.602 17.37l8.266 1.978V5.345l-8.266 3.74z"
      />
    </Svg>
  ),
  "github-actions": ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      />
    </Svg>
  ),
  jenkins: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M12.023 0C5.428 0 .01 5.418.01 12.014c0 5.36 3.545 9.91 8.43 11.4.5.1.68-.22.68-.48v-1.86c-3.43.75-4.15-1.65-4.15-1.65-.56-1.42-1.37-1.8-1.37-1.8-1.12-.76.08-.75.08-.75 1.24.09 1.89 1.27 1.89 1.27 1.1 1.88 2.89 1.34 3.59 1.02.11-.8.43-1.34.78-1.65-2.74-.31-5.62-1.37-5.62-6.1 0-1.35.48-2.45 1.27-3.31-.13-.31-.55-1.56.12-3.25 0 0 1.04-.33 3.4 1.27a11.8 11.8 0 016.18 0c2.36-1.6 3.4-1.27 3.4-1.27.67 1.69.25 2.94.12 3.25.79.86 1.27 1.96 1.27 3.31 0 4.75-2.89 5.78-5.64 6.09.44.38.84 1.13.84 2.28v3.38c0 .26.18.58.69.48A12.01 12.01 0 0024.01 12C24.01 5.418 18.592 0 12.023 0"
      />
    </Svg>
  ),
  circleci: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M8.484 0C3.808.047.048 3.812 0 8.484c-.05 4.766 3.76 8.63 8.484 8.63 2.078 0 3.98-.76 5.45-2.01l.2-.17-1.66-1.66-.15.13a5.95 5.95 0 01-3.84 1.4c-3.3 0-5.98-2.68-5.98-5.98S5.18 2.85 8.48 2.85a5.95 5.95 0 015.98 5.98c0 .48-.06.95-.17 1.4l1.99.53c.18-.62.28-1.27.28-1.93C16.55 3.8 12.75-.05 8.484 0zm0 5.4a3.08 3.08 0 100 6.16 3.08 3.08 0 000-6.16z"
      />
    </Svg>
  ),
  buildkite: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M15.7 8.48L12 12.17 8.3 8.48 12 4.8zm-7.4 7.04L4.6 19.22 0 14.61l3.69-3.69zm7.4 0l3.7 3.7L24 14.61l-3.69-3.69zM12 14.61l3.69 3.7L12 22.01l-3.69-3.7z"
      />
    </Svg>
  ),
  zoom: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M4.585 15.832.05 19.35C0 19.377 0 19.323 0 19.245V4.822C0 3.162 1.36 1.8 3.02 1.8h14.49c.083 0 .13.1.076.157L13.1 6.73H4.585a1.17 1.17 0 0 0-1.174 1.174v7.928zm17.59-9.61c-.043-.043-.076-.029-.076.043v9.582a3.02 3.02 0 0 1-3.02 3.02H4.585c-.072 0-.086-.033-.043-.076l4.485-4.485h8.388a1.17 1.17 0 0 0 1.174-1.174V6.222z"
      />
    </Svg>
  ),
  "google-meet": ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.25 14.625-2.25-1.5v1.5a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5v1.5l2.25-1.5a.75.75 0 011.125.638v5.224a.75.75 0 01-1.125.638z"
      />
    </Svg>
  ),
  "microsoft-teams-meetings": ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M20.625 8.5h-2.887a4.125 4.125 0 10-6.987-3.188A4.75 4.75 0 006.5 10.5H5.125A3.125 3.125 0 002 13.625v5.25A3.125 3.125 0 005.125 22h10.75A3.125 3.125 0 0019 19.875V17.5h1.625A1.875 1.875 0 0022.5 15.625v-5.25A1.875 1.875 0 0020.625 8.5z"
      />
    </Svg>
  ),
  "microsoft-teams-chat": ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M20.625 8.5h-2.887a4.125 4.125 0 10-6.987-3.188A4.75 4.75 0 006.5 10.5H5.125A3.125 3.125 0 002 13.625v5.25A3.125 3.125 0 005.125 22h10.75A3.125 3.125 0 0019 19.875V17.5h1.625A1.875 1.875 0 0022.5 15.625v-5.25A1.875 1.875 0 0020.625 8.5z"
      />
    </Svg>
  ),
  slack: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52zm1.268 0a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.83 24a2.528 2.528 0 01-2.52-2.522zM8.83 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.83 0a2.528 2.528 0 012.521 2.522v2.52zm0 1.268A2.528 2.528 0 0111.35 8.83a2.528 2.528 0 01-2.52 2.521H2.522A2.528 2.528 0 010 8.83a2.528 2.528 0 012.522-2.52zm10.128 2.52a2.528 2.528 0 012.52-2.52A2.528 2.528 0 0124 8.83a2.528 2.528 0 01-2.522 2.521h-2.52zm-1.268 0a2.528 2.528 0 01-2.521 2.521 2.527 2.527 0 01-2.521-2.52V2.522A2.527 2.527 0 0115.17 0a2.528 2.528 0 012.521 2.522zm-2.521 10.128a2.528 2.528 0 012.521 2.52A2.528 2.528 0 0115.17 24a2.527 2.527 0 01-2.521-2.522v-2.52zm0-1.268a2.527 2.527 0 01-2.52-2.521 2.527 2.527 0 012.52-2.521h6.313A2.527 2.527 0 0124 15.17a2.528 2.528 0 01-2.522 2.521z"
      />
    </Svg>
  ),
  pagerduty: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M16.973 0H3.066C1.375 0 0 1.375 0 3.066v17.868C0 22.625 1.375 24 3.066 24h13.907c1.691 0 3.066-1.375 3.066-3.066V3.066C20.039 1.375 18.664 0 16.973 0zm-2.2 17.2H5.2V6.8h9.573c2.2 0 4 1.8 4 4v2.4c0 2.2-1.8 4-4 4z"
      />
    </Svg>
  ),
  opsgenie: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm0 2.4a6 6 0 100 12 6 6 0 000-12zm0 2.4a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2z"
      />
    </Svg>
  ),
  confluence: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M.87 18.688c-.23.367-.09.85.277 1.081l4.2 2.622c.367.23.85.09 1.08-.277l8.25-13.2c.23-.367.09-.85-.277-1.08l-4.2-2.623c-.367-.23-.85-.09-1.08.277L.87 18.688zm12.12-5.25c-.23.367-.09.85.277 1.08l4.2 2.623c.367.23.85.09 1.08-.277L24 5.25c.23-.367.09-.85-.277-1.081l-4.2-2.622c-.367-.23-.85-.09-1.08.277l-5.453 8.614z"
      />
    </Svg>
  ),
  notion: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M4.459 4.208c.746.606 1.047.53 2.216.46l11.286-.668c.216 0 .04-.216-.04-.28-.326-.2-1.0-.467-2.216-.8L6.087.254c-.6-.2-.8-.067-1.2.333L.693 5.54c-.333.4-.2.667.333.867l3.433-.2zm.734 2.0v13.259c0 .734.267 1.0 1.134 1.067l12.486.734c.867.066 1.134-.134 1.134-.867V6.341c0-.733-.267-.933-.867-.867l-12.753.667c-.667.067-.934.334-.934.867zm12.086.8c.067.333 0 .666-.333.733l-.6.134v9.87c-.534.267-1.0.4-1.4.4-.6 0-.734-.2-1.2-.667l-3.667-5.733v5.533l1.16.267s0 .666-.867.666l-2.4-.134c-.067-.134 0-.6.2-.667l.6-.2V9.275l-.8-.2c-.067-.333.1-.8.733-.867l3.2-.2 3.467 5.333V8.942l-.867-.134c-.067-.333.2-.733.666-.8l2.801-.067z"
      />
    </Svg>
  ),
  datadog: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 11-.001 16.799A8.4 8.4 0 0112 3.6zm-1.8 3.6h3.6v9.6h-3.6zm0 0"
      />
    </Svg>
  ),
  cursor: ({ className, title }) => (
    <Svg className={className} title={title}>
      <path
        fill="currentColor"
        d="M11.372 0 0 9.177l4.358 3.84L11.372 24l6.97-6.088L24 9.177 11.372 0Zm0 4.8 7.2 5.777-2.88 2.515-4.32-3.774-4.32 3.774-2.88-2.515L11.372 4.8Z"
      />
    </Svg>
  ),
};

const tileColors: Record<string, string> = {
  github: "bg-[#24292f] text-white",
  gitlab: "bg-[#FC6D26] text-white",
  bitbucket: "bg-[#0052CC] text-white",
  jira: "bg-[#0052CC] text-white",
  linear: "bg-[#5E6AD2] text-white",
  "azure-boards": "bg-[#0078D4] text-white",
  "github-actions": "bg-[#2088FF] text-white",
  jenkins: "bg-[#D24939] text-white",
  circleci: "bg-[#343434] text-white",
  buildkite: "bg-[#14CC80] text-white",
  zoom: "bg-[#2D8CFF] text-white",
  "google-meet": "bg-[#00897B] text-white",
  "microsoft-teams-meetings": "bg-[#6264A7] text-white",
  "microsoft-teams-chat": "bg-[#6264A7] text-white",
  slack: "bg-[#4A154B] text-white",
  pagerduty: "bg-[#06AC38] text-white",
  opsgenie: "bg-[#2684FF] text-white",
  confluence: "bg-[#172B4D] text-white",
  notion: "bg-[#000000] text-white",
  datadog: "bg-[#632CA6] text-white",
  cursor: "bg-[#000000] text-white",
};

export function IntegrationLogo({
  slug,
  name,
  size = "md",
}: {
  slug: string;
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
}): React.ReactElement {
  const Logo = logos[slug];
  const tile = tileColors[slug] ?? "bg-foreground text-background";
  const box =
    size === "xs"
      ? "size-6 rounded-lg"
      : size === "sm"
        ? "size-8"
        : size === "lg"
          ? "size-12"
          : "size-10";
  const icon =
    size === "xs"
      ? "size-3"
      : size === "sm"
        ? "size-4"
        : size === "lg"
          ? "size-6"
          : "size-5";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl shadow-sm",
        box,
        tile,
      )}
      aria-hidden
    >
      {Logo ? (
        <Logo className={icon} title={name} />
      ) : (
        <span className="text-xs font-bold">{name.slice(0, 2).toUpperCase()}</span>
      )}
    </span>
  );
}
