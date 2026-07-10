import type { ResourceItem } from './resources-data';
import { guides } from './data/guides';
import { reports } from './data/reports';
import { tools } from './data/tools';
import { datasets } from './data/datasets';
import { courses } from './data/courses';
import { videos } from './data/videos';
import { newsletters } from './data/newsletters';

export const allResources: ResourceItem[] = [
  ...guides,
  ...reports,
  ...tools,
  ...datasets,
  ...courses,
  ...videos,
  ...newsletters,
];

export const resourcesByType = (type: string): ResourceItem[] => {
  if (type === 'all') return allResources;
  return allResources.filter((r) => r.type === type);
};

export const resourceBySlug = (slug: string): ResourceItem | undefined => {
  return allResources.find((r) => r.slug === slug);
};

export const relatedResources = (slug: string, limit = 4): ResourceItem[] => {
  const current = resourceBySlug(slug);
  if (!current) return [];
  return allResources
    .filter((r) => r.slug !== slug && (r.topic === current.topic || r.type === current.type))
    .slice(0, limit);
};

export type { ResourceItem, ResourceType, ResourceTopic } from './resources-data';
export { resourceTopics, resourceTypes, resourceStats } from './resources-data';
