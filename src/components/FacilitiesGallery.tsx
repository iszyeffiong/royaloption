import { useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

// Import all facility images
import facilityExterior from '@/assets/facility-exterior.jpg';
import facilityCommonRoom from '@/assets/facility-common-room.jpg';
import facilityKitchen from '@/assets/facility-kitchen.jpg';
import facilityBedroom from '@/assets/facility-bedroom.jpg';
import facilityBathroom from '@/assets/facility-bathroom.jpg';
import facilityActivityRoom from '@/assets/facility-activity-room.jpg';
import rop2 from '@/assets/rop2.png';
import rop3 from '@/assets/rop3.png';
import rop4 from '@/assets/rop4.png';
import rop from '@/assets/rop.png';
import rop5 from '@/assets/rop5.jpg';

interface FacilityItem {
  image: string;
  title: string;
  alt: string;
  width: number;
  height: number;
  aspect: number;
}

interface FacilitiesGalleryProps {
  showTitle?: boolean;
}

const facilityItems: FacilityItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289',
    title: 'Compassionate Care',
    alt: 'Caring nurse assisting elderly resident with genuine warmth',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: rop2,
    title: 'Personalized Meal Service',
    alt: 'Caregiver providing meal assistance to elderly resident in comfortable setting',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: rop3,
    title: 'Mobility Support',
    alt: 'Professional caregiver helping elderly resident with wheelchair transfer',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: rop4,
    title: 'Social Care',
    alt: 'Caregiver and resident sharing a joyful moment',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3',
    title: 'Modern Living Spaces',
    alt: 'Bright and welcoming community living area',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6',
    title: 'Therapy Facilities',
    alt: 'Well-equipped therapy and rehabilitation room',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: rop,
    title: 'Professional Care',
    alt: 'Healthcare professional providing personalized care to elderly resident',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },
  {
    image: rop2,
    title: 'Personalized Meal Service',
    alt: 'Caregiver providing meal assistance to elderly resident in comfortable setting',
    width: 1920,
    height: 1280,
    aspect: 1.5
  },    
  {
    image: rop5,
    title: 'Daily Health Assessment',
    alt: 'Healthcare provider conducting routine health check with elderly resident',
    width: 1920,
    height: 1280,
    aspect: 1.5
  }
];

const FacilitiesGallery = ({ showTitle = true }: FacilitiesGalleryProps) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Our Facilities</h2>
            <p className="text-xl text-muted-foreground">
              Take a look at our modern, accessible facilities designed for comfort and independence.
            </p>
          </motion.div>
        )}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {facilityItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-premium transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{
                    height: item.aspect < 1 ? '400px' : '300px'
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg text-center px-4">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        <style jsx global>{`
          .my-masonry-grid {
            display: flex;
            margin-left: -30px;
            width: auto;
          }
          .my-masonry-grid_column {
            padding-left: 30px;
            background-clip: padding-box;
          }
        `}</style>
      </div>
    </section>
  );
};

export default FacilitiesGallery;