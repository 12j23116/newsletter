export type ResourceType = 'Guide' | 'Report' | 'Tool' | 'Dataset' | 'Course' | 'Video' | 'Newsletter';

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  topic: string;
  topicColor: string;
  icon: string;
  readTime?: string;
  date: string;
  featured?: boolean;
  overview: string;
  highlights: string[];
  sections: { heading: string; content: string }[];
  tags: string[];
}

export interface ResourceTopic {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
  description: string;
}

export const resourceTopics: ResourceTopic[] = [
  { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', color: '#3b82f6', count: 18, description: 'LLMs, agents, training, and deployment' },
  { id: 'cyber', name: 'Cybersecurity', icon: '🛡️', color: '#ef4444', count: 12, description: 'Zero trust, post-quantum, threat intel' },
  { id: 'space', name: 'Space Tech', icon: '🚀', color: '#06b6d4', count: 10, description: 'Launch, satellites, lunar economy' },
  { id: 'biotech', name: 'Biotech', icon: '🧬', color: '#10b981', count: 11, description: 'CRISPR, mRNA, gene therapy' },
  { id: 'nuclear', name: 'Nuclear Energy', icon: '☢️', color: '#f59e0b', count: 8, description: 'SMRs, Gen IV reactors, fuel cycles' },
  { id: 'energy', name: 'Energy Storage', icon: '🔋', color: '#f97316', count: 9, description: 'Solid-state, grid storage, hydrogen' },
  { id: 'robotics', name: 'Robotics', icon: '🤖', color: '#ec4899', count: 10, description: 'Humanoids, cobots, autonomous systems' },
  { id: 'quantum', name: 'Quantum Computing', icon: '🔮', color: '#a78bfa', count: 8, description: 'Qubits, error correction, QKD' },
  { id: 'fusion', name: 'Fusion Energy', icon: '⚛️', color: '#fb923c', count: 7, description: 'Tokamaks, ICF, net energy gain' },
  { id: 'av', name: 'Autonomous Vehicles', icon: '🚗', color: '#8b5cf6', count: 8, description: 'Robotaxis, LiDAR, Level 4+ autonomy' },
  { id: 'materials', name: 'Advanced Materials', icon: '🔬', color: '#f43f5e', count: 6, description: 'Graphene, metamaterials, superconductors' },
  { id: 'bci', name: 'Brain-Computer Interfaces', icon: '🔌', color: '#0ea5e9', count: 6, description: 'Neural implants, EEG, neurofeedback' },
];

export const resourceTypes: { id: string; name: string; icon: string; color: string }[] = [
  { id: 'all', name: 'All', icon: '⚡', color: '#3b82f6' },
  { id: 'Guide', name: 'Guides', icon: '📖', color: '#3b82f6' },
  { id: 'Report', name: 'Reports', icon: '📊', color: '#06b6d4' },
  { id: 'Tool', name: 'Tools', icon: '🔧', color: '#10b981' },
  { id: 'Dataset', name: 'Datasets', icon: '🗄️', color: '#f59e0b' },
  { id: 'Course', name: 'Courses', icon: '🎓', color: '#8b5cf6' },
  { id: 'Video', name: 'Videos', icon: '🎥', color: '#ec4899' },
  { id: 'Newsletter', name: 'Newsletters', icon: '📧', color: '#f97316' },
];

export const resourceStats = [
  { label: 'Resources', value: '85+', suffix: '' },
  { label: 'Types', value: '7', suffix: '' },
  { label: 'Topics', value: '12', suffix: '' },
  { label: 'Updated', value: '2026', suffix: '' },
];
