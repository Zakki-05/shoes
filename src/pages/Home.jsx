import React from 'react';
import { HeroSection } from '../components/Hero3D/HeroSection';
import { CategorySection } from '../components/CategorySection';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { BrandStorySection } from '../components/BrandStorySection';
import { EditorialSection } from '../components/EditorialSection';
import { Newsletter } from '../components/Newsletter';

export function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* 3D Main Hero Section */}
      <HeroSection />

      {/* Category Overview */}
      <CategorySection />

      {/* Featured Collection Tabs & Cards */}
      <FeaturedCollection />

      {/* Brand Craftsmanship Story */}
      <BrandStorySection />

      {/* Magazine Fashion Editorial */}
      <EditorialSection />

      {/* VIP Trunk Show Newsletter */}
      <Newsletter />
    </div>
  );
}
