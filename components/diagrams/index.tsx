"use client";

import ArchitectureDiagram, { type DiagramNode, type DiagramEdge } from "./ArchitectureDiagram";

const droneNodes: DiagramNode[] = [
  { id: "video", label: "VIDEO_INGEST", x: 18, y: 20, accent: "muted", w: 24 },
  { id: "frames", label: "FRAME_EXTRACT", x: 18, y: 55, accent: "muted", w: 26 },
  { id: "yolo", label: "YOLOv8_ENGINE", x: 50, y: 37, accent: "cyan", w: 26 },
  { id: "anfis", label: "ANFIS_THREAT", x: 82, y: 20, accent: "emerald", w: 24 },
  { id: "rag", label: "RAG + LLM", x: 82, y: 60, accent: "cyan", w: 22 },
  { id: "out", label: "EXPLAINABLE_OUTPUT", x: 50, y: 85, accent: "emerald", w: 38 },
];
const droneEdges: DiagramEdge[] = [
  { from: "video", to: "frames" },
  { from: "frames", to: "yolo" },
  { from: "video", to: "yolo" },
  { from: "yolo", to: "anfis" },
  { from: "yolo", to: "rag" },
  { from: "anfis", to: "out" },
  { from: "rag", to: "out" },
];

const agentNodes: DiagramNode[] = [
  { id: "planner", label: "PLANNER_AGENT", x: 50, y: 15, accent: "cyan", w: 28 },
  { id: "router", label: "ROUTER", x: 50, y: 42, accent: "blue", w: 20 },
  { id: "analysis", label: "ANALYSIS", x: 25, y: 77, accent: "emerald", w: 20 },
  { id: "search", label: "SEARCH", x: 50, y: 84, accent: "emerald", w: 18 },
  { id: "code", label: "CODE_GEN", x: 75, y: 77, accent: "emerald", w: 20 },
  { id: "state", label: "NEO4J · REDIS", x: 24, y: 40, accent: "muted", w: 24 },
  { id: "mcp", label: "MCP · TOOLS", x: 76, y: 40, accent: "muted", w: 22 },
];
const agentEdges: DiagramEdge[] = [
  { from: "planner", to: "router" },
  { from: "router", to: "analysis" },
  { from: "router", to: "search" },
  { from: "router", to: "code" },
  { from: "router", to: "mcp" },
  { from: "router", to: "state" },
];

const ragNodes: DiagramNode[] = [
  { id: "doc", label: "DOC_INGEST", x: 22, y: 22, accent: "muted", w: 22 },
  { id: "chunk", label: "CHUNK + EMBED", x: 22, y: 62, accent: "cyan", w: 26 },
  { id: "vector", label: "VECTOR_STORE", x: 50, y: 33, accent: "cyan", w: 24 },
  { id: "retrieve", label: "SEMANTIC_RETRIEVAL", x: 50, y: 71, accent: "blue", w: 30 },
  { id: "bedrock", label: "AWS_BEDROCK", x: 78, y: 33, accent: "emerald", w: 22 },
  { id: "out", label: "ATS_OUTPUT", x: 78, y: 71, accent: "emerald", w: 22 },
];
const ragEdges: DiagramEdge[] = [
  { from: "doc", to: "chunk" },
  { from: "chunk", to: "vector" },
  { from: "vector", to: "retrieve" },
  { from: "retrieve", to: "bedrock" },
  { from: "bedrock", to: "out" },
  { from: "retrieve", to: "out" },
];

const backendNodes: DiagramNode[] = [
  { id: "client", label: "CLIENT", x: 14, y: 50, accent: "blue", w: 18 },
  { id: "api", label: "FASTAPI_GATEWAY", x: 40, y: 50, accent: "cyan", w: 28 },
  { id: "svc", label: "SERVICES", x: 68, y: 30, accent: "emerald", w: 20 },
  { id: "cache", label: "REDIS", x: 86, y: 55, accent: "muted", w: 16 },
  { id: "graph", label: "NEO4J", x: 68, y: 78, accent: "muted", w: 16 },
];
const backendEdges: DiagramEdge[] = [
  { from: "client", to: "api" },
  { from: "api", to: "svc" },
  { from: "svc", to: "cache" },
  { from: "svc", to: "graph" },
];

const map = {
  drone: { nodes: droneNodes, edges: droneEdges, label: "Drone detection pipeline" },
  multiagent: { nodes: agentNodes, edges: agentEdges, label: "Multi-agent architecture" },
  rag: { nodes: ragNodes, edges: ragEdges, label: "RAG pipeline" },
  backend: { nodes: backendNodes, edges: backendEdges, label: "Backend architecture" },
} as const;

export type DiagramKind = keyof typeof map;

export default function Diagram({ kind, className }: { kind: DiagramKind; className?: string }) {
  const cfg = map[kind];
  return <ArchitectureDiagram nodes={cfg.nodes} edges={cfg.edges} label={cfg.label} className={className} />;
}
