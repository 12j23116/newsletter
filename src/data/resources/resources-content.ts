export { type ResourceItem, type ResourceType, type ResourceTopic, resourceTopics, resourceTypes, resourceStats } from './resources-data';
export { allResources as resources, resourcesByType, resourceBySlug, relatedResources, allResources } from './resources-index';

import { allResources } from './resources-index';
export const featuredResources = allResources.filter((r) => r.featured);
