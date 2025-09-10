"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Clock,
  Zap,
  Target,
  Microscope,
} from "lucide-react";

// Simple animated counter component
function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * value);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Enhanced Scientific Line Chart Component
function ScientificLineChart({
  data,
  height,
  title,
  yLabel,
  lines,
}: {
  data: any[];
  height: number;
  title: string;
  yLabel: string;
  lines: { key: string; color: string; label: string }[];
}) {
  const [hoveredPoint, setHoveredPoint] = useState<{
    lineIndex: number;
    pointIndex: number;
  } | null>(null);

  const chartHeight = height - 120;
  const chartWidth = 80;
  const padding = { left: 15, right: 10, top: 30, bottom: 70 };

  // Calculate scales
  const allValues = data.flatMap((d) => lines.map((line) => d[line.key] || 0));
  const maxValue = Math.max(...allValues) * 1.1; // Add 10% padding
  const minValue = Math.min(...allValues) * 0.9; // Add 10% padding
  const valueRange = maxValue - minValue;

  const getX = (index: number) =>
    padding.left + (index / (data.length - 1)) * chartWidth;
  const getY = (value: number) =>
    padding.top + ((maxValue - value) / valueRange) * chartHeight;

  return (
    <div
      className="w-full bg-gradient-to-br from-white to-slate-50 rounded-xl border border-slate-200 shadow-lg p-6"
      style={{ height: height + 60 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-bold text-slate-800">{title}</h4>
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Live Data</span>
        </div>
      </div>

      <svg width="100%" height={height} className="overflow-visible">
        <defs>
          {lines.map((line, index) => (
            <g key={index}>
              <linearGradient
                id={`gradient-${line.key}`}
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor={line.color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={line.color} stopOpacity="0.05" />
              </linearGradient>
              <filter
                id={`glow-${line.key}`}
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter
                id={`shadow-${line.key}`}
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="2"
                  stdDeviation="2"
                  floodColor={line.color}
                  floodOpacity="0.3"
                />
              </filter>
            </g>
          ))}
        </defs>

        {/* Background grid */}
        <rect
          x={`${padding.left}%`}
          y={padding.top}
          width={`${chartWidth}%`}
          height={chartHeight}
          fill="rgba(248, 250, 252, 0.5)"
          stroke="#e2e8f0"
          strokeWidth="1"
          rx="4"
        />

        {/* Grid lines */}
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((ratio) => (
          <g key={ratio}>
            <line
              x1={`${padding.left}%`}
              y1={padding.top + ratio * chartHeight}
              x2={`${padding.left + chartWidth}%`}
              y2={padding.top + ratio * chartHeight}
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.7"
            />
            <text
              x={`${padding.left - 1}%`}
              y={padding.top + ratio * chartHeight + 4}
              textAnchor="end"
              className="text-xs fill-slate-500 font-medium"
            >
              {Math.round(maxValue - ratio * valueRange)}
            </text>
          </g>
        ))}

        {/* Vertical grid lines */}
        {data.map((_, index) => (
          <line
            key={index}
            x1={`${getX(index)}%`}
            y1={padding.top}
            x2={`${getX(index)}%`}
            y2={padding.top + chartHeight}
            stroke="#f1f5f9"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}

        {/* Y-axis */}
        <line
          x1={`${padding.left}%`}
          y1={padding.top}
          x2={`${padding.left}%`}
          y2={padding.top + chartHeight}
          stroke="#64748b"
          strokeWidth="2"
        />

        {/* X-axis */}
        <line
          x1={`${padding.left}%`}
          y1={padding.top + chartHeight}
          x2={`${padding.left + chartWidth}%`}
          y2={padding.top + chartHeight}
          stroke="#64748b"
          strokeWidth="2"
        />

        {/* Y-axis label */}
        <text
          x="3%"
          y={padding.top + chartHeight / 2}
          textAnchor="middle"
          className="text-sm fill-slate-700 font-semibold"
          transform={`rotate(-90, 3, ${padding.top + chartHeight / 2})`}
        >
          {yLabel}
        </text>

        {/* Lines and areas */}
        {lines.map((line, lineIndex) => {
          // Create smooth curve path using quadratic bezier curves
          const createSmoothPath = (points: { x: number; y: number }[]) => {
            if (points.length < 2) return "";

            let path = `M ${points[0].x}% ${points[0].y}`;

            for (let i = 1; i < points.length; i++) {
              const prev = points[i - 1];
              const curr = points[i];
              const next = points[i + 1];

              if (i === 1) {
                // First curve
                const cp1x = prev.x + (curr.x - prev.x) * 0.3;
                const cp1y = prev.y;
                const cp2x = curr.x - (curr.x - prev.x) * 0.3;
                const cp2y = curr.y;
                path += ` C ${cp1x}% ${cp1y} ${cp2x}% ${cp2y} ${curr.x}% ${curr.y}`;
              } else if (i === points.length - 1) {
                // Last curve
                const cp1x = prev.x + (curr.x - prev.x) * 0.3;
                const cp1y = prev.y;
                const cp2x = curr.x - (curr.x - prev.x) * 0.3;
                const cp2y = curr.y;
                path += ` C ${cp1x}% ${cp1y} ${cp2x}% ${cp2y} ${curr.x}% ${curr.y}`;
              } else {
                // Middle curves
                const cp1x = prev.x + (curr.x - prev.x) * 0.3;
                const cp1y = prev.y + (curr.y - prev.y) * 0.3;
                const cp2x = curr.x - (next.x - prev.x) * 0.1;
                const cp2y = curr.y - (next.y - prev.y) * 0.1;
                path += ` C ${cp1x}% ${cp1y} ${cp2x}% ${cp2y} ${curr.x}% ${curr.y}`;
              }
            }
            return path;
          };

          const points = data.map((item, index) => ({
            x: getX(index),
            y: getY(item[line.key] || 0),
          }));

          const smoothPath = createSmoothPath(points);

          const areaPath = [
            `M ${getX(0)}% ${padding.top + chartHeight}`,
            smoothPath.substring(2), // Remove the 'M' from the beginning
            `L ${getX(data.length - 1)}% ${padding.top + chartHeight}`,
            "Z",
          ].join(" ");

          return (
            <g key={lineIndex}>
              {/* Area fill with gradient */}
              <path
                d={areaPath}
                fill={`url(#gradient-${line.key})`}
                className="transition-all duration-1500 ease-out"
                style={{
                  animation: `fadeInUp 1.5s ease-out ${lineIndex * 0.3}s both`,
                }}
              />

              {/* Main line with glow effect */}
              <path
                d={smoothPath}
                fill="none"
                stroke={line.color}
                strokeWidth="3"
                filter={`url(#glow-${line.key})`}
                className="transition-all duration-1500 ease-out"
                style={{
                  strokeDasharray: "1000",
                  strokeDashoffset: "1000",
                  animation: `drawLine 2s ease-out ${lineIndex * 0.2}s both`,
                }}
              />

              {/* Data points with enhanced styling */}
              {data.map((item, index) => {
                const isHovered =
                  hoveredPoint?.lineIndex === lineIndex &&
                  hoveredPoint?.pointIndex === index;
                return (
                  <g key={index}>
                    {/* Point shadow */}
                    <circle
                      cx={`${getX(index)}%`}
                      cy={getY(item[line.key] || 0)}
                      r={isHovered ? "8" : "6"}
                      fill={line.color}
                      opacity="0.2"
                      className="transition-all duration-300"
                    />

                    {/* Main point */}
                    <circle
                      cx={`${getX(index)}%`}
                      cy={getY(item[line.key] || 0)}
                      r={isHovered ? "6" : "4"}
                      fill={line.color}
                      stroke="white"
                      strokeWidth="2"
                      filter={`url(#shadow-${line.key})`}
                      className="transition-all duration-300 cursor-pointer"
                      style={{
                        animation: `popIn 0.6s ease-out ${
                          lineIndex * 0.1 + index * 0.1
                        }s both`,
                      }}
                      onMouseEnter={() =>
                        setHoveredPoint({ lineIndex, pointIndex: index })
                      }
                      onMouseLeave={() => setHoveredPoint(null)}
                    />

                    {/* Value label on hover */}
                    {isHovered && (
                      <g>
                        <rect
                          x={`${getX(index) - 3}%`}
                          y={getY(item[line.key] || 0) - 25}
                          width="6%"
                          height="20"
                          fill="rgba(0,0,0,0.8)"
                          rx="4"
                          className="animate-fade-in"
                        />
                        <text
                          x={`${getX(index)}%`}
                          y={getY(item[line.key] || 0) - 10}
                          textAnchor="middle"
                          className="text-xs fill-white font-bold"
                        >
                          {item[line.key]}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}

        {/* X-axis labels with better styling */}
        {data.map((item, index) => (
          <g key={index}>
            <text
              x={`${getX(index)}%`}
              y={height - 35}
              textAnchor="middle"
              className="text-sm fill-slate-700 font-medium"
            >
              {item.label}
            </text>
            {/* Tick marks */}
            <line
              x1={`${getX(index)}%`}
              y1={padding.top + chartHeight}
              x2={`${getX(index)}%`}
              y2={padding.top + chartHeight + 5}
              stroke="#64748b"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>

      {/* Enhanced Legend */}
      <div className="flex justify-center space-x-8 mt-6 p-4 bg-slate-50 rounded-lg">
        {lines.map((line, index) => (
          <div
            key={line.key}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div
                className="w-4 h-4 rounded-full transition-all duration-300 group-hover:scale-125"
                style={{ backgroundColor: line.color }}
              ></div>
              <div
                className="absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-20"
                style={{ backgroundColor: line.color }}
              ></div>
            </div>
            <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
              {line.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Updated data with meaningful deep-sea eDNA metrics
const noveltyDetectionData = [
  {
    label: "0-1km",
    depth: 1000,
    novelSpecies: 12,
    classificationTime: 45,
    clusteringAccuracy: 89,
    totalSpecies: 156,
  },
  {
    label: "1-2km",
    depth: 2000,
    novelSpecies: 28,
    classificationTime: 52,
    clusteringAccuracy: 91,
    totalSpecies: 203,
  },
  {
    label: "2-3km",
    depth: 3000,
    novelSpecies: 45,
    classificationTime: 67,
    clusteringAccuracy: 94,
    totalSpecies: 287,
  },
  {
    label: "3-4km",
    depth: 4000,
    novelSpecies: 67,
    classificationTime: 78,
    clusteringAccuracy: 96,
    totalSpecies: 342,
  },
  {
    label: "4-5km",
    depth: 5000,
    novelSpecies: 89,
    classificationTime: 85,
    clusteringAccuracy: 97,
    totalSpecies: 398,
  },
  {
    label: "5km+",
    depth: 6000,
    novelSpecies: 124,
    classificationTime: 92,
    clusteringAccuracy: 98,
    totalSpecies: 456,
  },
];

const pipelinePerformanceData = [
  {
    label: "Week 1",
    week: 1,
    bertaxSpeed: 23,
    dnabertAccuracy: 87,
    noveltyDetection: 78,
    throughput: 145,
  },
  {
    label: "Week 2",
    week: 2,
    bertaxSpeed: 28,
    dnabertAccuracy: 89,
    noveltyDetection: 82,
    throughput: 167,
  },
  {
    label: "Week 3",
    week: 3,
    bertaxSpeed: 34,
    dnabertAccuracy: 92,
    noveltyDetection: 85,
    throughput: 189,
  },
  {
    label: "Week 4",
    week: 4,
    bertaxSpeed: 41,
    dnabertAccuracy: 94,
    noveltyDetection: 88,
    throughput: 212,
  },
  {
    label: "Week 5",
    week: 5,
    bertaxSpeed: 47,
    dnabertAccuracy: 96,
    noveltyDetection: 91,
    throughput: 234,
  },
  {
    label: "Week 6",
    week: 6,
    bertaxSpeed: 52,
    dnabertAccuracy: 97,
    noveltyDetection: 94,
    throughput: 256,
  },
];

const taxonomicData = [
  { name: "Arthropoda", value: 35, color: "#3b82f6" },
  { name: "Mollusca", value: 28, color: "#10b981" },
  { name: "Cnidaria", value: 22, color: "#f59e0b" },
  { name: "Porifera", value: 15, color: "#ef4444" },
];

const performanceData = [
  { name: "BERTax Speed", value: 94, benchmark: 85 },
  { name: "DNABERT-S Accuracy", value: 97, benchmark: 90 },
  { name: "Novelty Detection", value: 91, benchmark: 80 },
  { name: "Clustering Precision", value: 96, benchmark: 88 },
];

const chartTypes = [
  {
    id: "performance",
    icon: BarChart3,
    title: "Model Performance",
    active: true,
  },
  {
    id: "taxonomy",
    icon: PieChartIcon,
    title: "Taxonomic Distribution",
    active: false,
  },
  {
    id: "novelty",
    icon: Microscope,
    title: "Novelty Detection",
    active: false,
  },
  {
    id: "pipeline",
    icon: Activity,
    title: "Pipeline Performance",
    active: false,
  },
];

export default function AdvancedCharts() {
  const [activeChart, setActiveChart] = useState("performance");

  return (
    <section id="analytics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-slide-up">
            Analytics Dashboard
          </h2>
          <p className="text-xl text-abyss-600 max-w-3xl mx-auto animate-slide-up stagger-1">
            Real-time metrics and analysis results from BERTax → DNABERT-S
            pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Chart Navigation */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-abyss-900 mb-6">
                Chart Types
              </h3>
              <div className="space-y-3">
                {chartTypes.map((chart) => (
                  <button
                    key={chart.id}
                    onClick={() => setActiveChart(chart.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                      activeChart === chart.id
                        ? "bg-teal-100 border-2 border-teal-500 text-teal-700"
                        : "bg-abyss-50 border border-abyss-200 text-abyss-600 hover:bg-abyss-100"
                    }`}
                  >
                    <chart.icon className="h-5 w-5" />
                    <span className="font-medium text-sm">{chart.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chart Display */}
          <div className="lg:col-span-3">
            <div key={activeChart} className="animate-fade-in">
              {activeChart === "performance" && (
                <div className="space-y-8">
                  {/* Performance Overview */}
                  <div className="card p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                      BERTax → DNABERT-S Model Performance
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {performanceData.map((metric, index) => (
                        <div key={index} className="relative group">
                          <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                            {/* Icon */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-ocean-500 to-teal-600 rounded-lg flex items-center justify-center">
                                {index === 0 && (
                                  <Zap className="h-6 w-6 text-white" />
                                )}
                                {index === 1 && (
                                  <Target className="h-6 w-6 text-white" />
                                )}
                                {index === 2 && (
                                  <Microscope className="h-6 w-6 text-white" />
                                )}
                                {index === 3 && (
                                  <Activity className="h-6 w-6 text-white" />
                                )}
                              </div>
                              <div className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                Live
                              </div>
                            </div>

                            {/* Value */}
                            <div className="text-3xl font-bold text-ocean-600 mb-2">
                              <AnimatedCounter
                                value={metric.value}
                                suffix="%"
                                duration={2500}
                              />
                            </div>

                            {/* Label */}
                            <div className="text-sm text-slate-700 font-medium mb-3">
                              {metric.name}
                            </div>

                            {/* Progress Bar */}
                            <div className="relative">
                              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                                <div
                                  className="bg-gradient-to-r from-ocean-500 to-teal-600 h-3 rounded-full transition-all duration-3000 ease-out relative"
                                  style={{ width: `${metric.value}%` }}
                                >
                                  <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                                </div>
                              </div>

                              {/* Benchmark indicator */}
                              <div
                                className="absolute top-0 w-1 h-3 bg-red-400 rounded-full"
                                style={{ left: `${metric.benchmark}%` }}
                                title={`Benchmark: ${metric.benchmark}%`}
                              ></div>
                            </div>

                            {/* Benchmark text */}
                            <div className="text-xs text-slate-500 mt-2 flex items-center justify-between">
                              <span>vs {metric.benchmark}% benchmark</span>
                              <span
                                className={`font-medium ${
                                  metric.value > metric.benchmark
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {metric.value > metric.benchmark ? "+" : ""}
                                {metric.value - metric.benchmark}%
                              </span>
                            </div>
                          </div>

                          {/* Hover effect overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-time Performance Chart */}
                  <div className="card p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">
                      Performance Trends
                    </h4>
                    <div className="h-64 relative">
                      <svg
                        width="100%"
                        height="100%"
                        className="overflow-visible"
                      >
                        <defs>
                          <linearGradient
                            id="performanceGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#14b8a6" />
                          </linearGradient>
                        </defs>

                        {/* Simple trend line */}
                        <path
                          d="M 10% 80% Q 30% 60% 50% 50% T 90% 30%"
                          fill="none"
                          stroke="url(#performanceGradient)"
                          strokeWidth="3"
                          className="transition-all duration-2000 ease-out"
                          style={{
                            strokeDasharray: "1000",
                            strokeDashoffset: "1000",
                            animation: "drawLine 3s ease-out 0.5s both",
                          }}
                        />

                        {/* Data points */}
                        {[10, 30, 50, 70, 90].map((x, index) => (
                          <circle
                            key={index}
                            cx={`${x}%`}
                            cy={`${80 - index * 12}%`}
                            r="4"
                            fill="#0ea5e9"
                            stroke="white"
                            strokeWidth="2"
                            className="transition-all duration-300 hover:r-6"
                            style={{
                              animation: `popIn 0.6s ease-out ${
                                0.8 + index * 0.2
                              }s both`,
                            }}
                          />
                        ))}

                        {/* Labels */}
                        <text
                          x="10%"
                          y="95%"
                          textAnchor="middle"
                          className="text-xs fill-slate-600"
                        >
                          Week 1
                        </text>
                        <text
                          x="30%"
                          y="95%"
                          textAnchor="middle"
                          className="text-xs fill-slate-600"
                        >
                          Week 2
                        </text>
                        <text
                          x="50%"
                          y="95%"
                          textAnchor="middle"
                          className="text-xs fill-slate-600"
                        >
                          Week 3
                        </text>
                        <text
                          x="70%"
                          y="95%"
                          textAnchor="middle"
                          className="text-xs fill-slate-600"
                        >
                          Week 4
                        </text>
                        <text
                          x="90%"
                          y="95%"
                          textAnchor="middle"
                          className="text-xs fill-slate-600"
                        >
                          Week 5
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {activeChart === "taxonomy" && (
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Deep-Sea Taxonomic Distribution
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      {taxonomicData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium text-slate-900">
                              {item.name}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">
                              <AnimatedCounter value={item.value} suffix="%" />
                            </div>
                            <div className="text-xs text-slate-500">
                              of total species
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl font-bold text-ocean-600 mb-2">
                          <AnimatedCounter value={1247} />
                        </div>
                        <div className="text-lg text-slate-600">
                          Total Species Identified
                        </div>
                        <div className="text-sm text-slate-500 mt-2">
                          Across all deep-sea zones
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeChart === "novelty" && (
                <ScientificLineChart
                  data={noveltyDetectionData}
                  height={400}
                  title="Novel Species Detection by Depth"
                  yLabel="Count / Accuracy (%)"
                  lines={[
                    {
                      key: "novelSpecies",
                      color: "#ef4444",
                      label: "Novel Species",
                    },
                    {
                      key: "clusteringAccuracy",
                      color: "#10b981",
                      label: "Clustering Accuracy (%)",
                    },
                    {
                      key: "classificationTime",
                      color: "#3b82f6",
                      label: "Classification Time (s)",
                    },
                  ]}
                />
              )}

              {activeChart === "pipeline" && (
                <ScientificLineChart
                  data={pipelinePerformanceData}
                  height={400}
                  title="BERTax → DNABERT-S Pipeline Performance Over Time"
                  yLabel="Performance Metrics"
                  lines={[
                    {
                      key: "bertaxSpeed",
                      color: "#8b5cf6",
                      label: "BERTax Speed (seq/min)",
                    },
                    {
                      key: "dnabertAccuracy",
                      color: "#06b6d4",
                      label: "DNABERT-S Accuracy (%)",
                    },
                    {
                      key: "noveltyDetection",
                      color: "#f59e0b",
                      label: "Novelty Detection (%)",
                    },
                    {
                      key: "throughput",
                      color: "#10b981",
                      label: "Throughput (samples/day)",
                    },
                  ]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
