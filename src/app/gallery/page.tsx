'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useScrollReveal, useCountUp } from '@/hooks/useAnimations'

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'landscape', label: 'Landscapes' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'wildlife', label: 'Wildlife' },
]

// Massive stable archive IDs - 141 total curated images
const ARCHIVE_100 = [
  // Block 1 (1-20)
  { id: 101, cat: 'landscape', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200', title: 'Mountain Crest', loc: 'Dolomites' },
  { id: 102, cat: 'landscape', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200', title: 'Peak Silence', loc: 'Rockies' },
  { id: 103, cat: 'landscape', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200', title: 'Mirror Loch', loc: 'Scotland' },
  { id: 104, cat: 'landscape', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200', title: 'Golden Glen', loc: 'Glencoe' },
  { id: 105, cat: 'landscape', src: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1200', title: 'Mist on the Isle', loc: 'Skye' },
  { id: 106, cat: 'landscape', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200', title: 'Wild Ridge', loc: 'Pacific' },
  { id: 107, cat: 'landscape', src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200', title: 'Hidden Creek', loc: 'Forest' },
  { id: 108, cat: 'landscape', src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200', title: 'Aurora Blaze', loc: 'Norway' },
  { id: 109, cat: 'landscape', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200', title: 'Desert Rose', loc: 'Namibia' },
  { id: 110, cat: 'landscape', src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200', title: 'Ice Cave', loc: 'Vatnajokull' },
  { id: 201, cat: 'portraits', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200', title: 'The Gaze', loc: 'Berlin' },
  { id: 202, cat: 'portraits', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200', title: 'The Seer', loc: 'London' },
  { id: 203, cat: 'portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200', title: 'Afternoon Glow', loc: 'Paris' },
  { id: 204, cat: 'portraits', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200', title: 'The Architect', loc: 'Dublin' },
  { id: 205, cat: 'portraits', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200', title: 'Radiance', loc: 'Milan' },
  { id: 206, cat: 'portraits', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200', title: 'Urban Story', loc: 'Tokyo' },
  { id: 207, cat: 'portraits', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200', title: 'Summer Joy', loc: 'Greece' },
  { id: 208, cat: 'portraits', src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200', title: 'Street Soul', loc: 'NY' },
  { id: 209, cat: 'portraits', src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200', title: 'Blue Mood', loc: 'Copenhagen' },
  { id: 210, cat: 'portraits', src: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1200', title: 'Neon Night', loc: 'Tokyo' },

  // Block 2 (21-40)
  { id: 301, cat: 'architecture', src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200', title: 'Steel Echo', loc: 'NYC' },
  { id: 302, cat: 'architecture', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200', title: 'Vatican Spiral', loc: 'Rome' },
  { id: 303, cat: 'architecture', src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200', title: 'Dubai Sky', loc: 'UAE' },
  { id: 304, cat: 'architecture', src: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200', title: 'Shadow Lines', loc: 'Madrid' },
  { id: 305, cat: 'architecture', src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1200', title: 'Perspective', loc: 'Chicago' },
  { id: 306, cat: 'architecture', src: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1200', title: 'Minimalist Wall', loc: 'Portugal' },
  { id: 307, cat: 'architecture', src: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1200', title: 'The Corridor', loc: 'Prague' },
  { id: 308, cat: 'architecture', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200', title: 'White Form', loc: 'Osaka' },
  { id: 309, cat: 'architecture', src: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200', title: 'Shadow Arc', loc: 'Madrid' },
  { id: 310, cat: 'architecture', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', title: 'Concrete Line', loc: 'London' },
  { id: 401, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200', title: 'The Union', loc: 'Loch' },
  { id: 402, cat: 'weddings', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200', title: 'Grand Entry', loc: 'Manor' },
  { id: 403, cat: 'weddings', src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=1200', title: 'Bridal Gaze', loc: 'Abbey' },
  { id: 404, cat: 'weddings', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200', title: 'Celebration', loc: 'Park' },
  { id: 405, cat: 'weddings', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200', title: 'Garden Vows', loc: 'Surrey' },
  { id: 406, cat: 'weddings', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200', title: 'The Reception', loc: 'London' },
  { id: 407, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200', title: 'Beach Wedding', loc: 'Bali' },
  { id: 408, cat: 'weddings', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200', title: 'The Toast', loc: 'Kent' },
  { id: 409, cat: 'weddings', src: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200', title: 'Castle Reception', loc: 'Scotland' },
  { id: 410, cat: 'weddings', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200', title: 'Golden Hour Kiss', loc: 'Tuscany' },

  // Block 3 (41-60)
  { id: 501, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200', title: 'The Guardian', loc: 'Highlands' },
  { id: 502, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1200', title: 'Winter Fox', loc: 'Hokkaido' },
  { id: 503, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1200', title: 'The Voyager', loc: 'Deep Blue' },
  { id: 504, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200', title: 'Panda Zen', loc: 'China' },
  { id: 505, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=1200', title: 'Kingfisher', loc: 'Suffolk' },
  { id: 506, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1200', title: 'Eagle Flight', loc: 'Alaska' },
  { id: 507, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200', title: 'Wolf Gaze', loc: 'Canada' },
  { id: 508, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?q=80&w=1200', title: 'Puffin Peak', loc: 'Iceland' },
  { id: 509, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200', title: 'Lion Pride', loc: 'Kenya' },
  { id: 111, cat: 'landscape', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200', title: 'Sunset Peak', loc: 'Alps' },

  // Block 4 (New 40 images to hit 100) (61-100)
  { id: 112, cat: 'landscape', src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200', title: 'Wild Bloom', loc: 'Oregon' },
  { id: 113, cat: 'landscape', src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200', title: 'Silver Mist', loc: 'Oregon' },
  { id: 114, cat: 'landscape', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200', title: 'Forest Depth', loc: 'Pacific Northwest' },
  { id: 115, cat: 'landscape', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200', title: 'Red Rock Canyon', loc: 'Arizona' },
  { id: 116, cat: 'landscape', src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200', title: 'Emerald Valley', loc: 'Switzerland' },
  { id: 211, cat: 'portraits', src: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=1200', title: 'Shadow Profile', loc: 'Paris' },
  { id: 212, cat: 'portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200', title: 'Gilded Gaze', loc: 'Barcelona' },
  { id: 213, cat: 'portraits', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200', title: 'Minimal Face', loc: 'NYC' },
  { id: 214, cat: 'portraits', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200', title: 'The Craftsman', loc: 'Berlin' },
  { id: 215, cat: 'portraits', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200', title: 'Expression', loc: 'London' },
  { id: 311, cat: 'architecture', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200', title: 'Urban Geometry', loc: 'Singapore' },
  { id: 312, cat: 'architecture', src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1200', title: 'White Vault', loc: 'Osaka' },
  { id: 313, cat: 'architecture', src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200', title: 'Silent Stairs', loc: 'Lisbon' },
  { id: 314, cat: 'architecture', src: 'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=1200', title: 'Concrete Wave', loc: 'Bilbao' },
  { id: 315, cat: 'architecture', src: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=1200', title: 'Glass Canopy', loc: 'Hong Kong' },
  { id: 411, cat: 'weddings', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200', title: 'Lakeside Union', loc: 'Como' },
  { id: 412, cat: 'weddings', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200', title: 'The First Dance', loc: 'Paris' },
  { id: 413, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200', title: 'Ocean Vows', loc: 'Maldives' },
  { id: 414, cat: 'weddings', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200', title: 'Reception Glow', loc: 'Manhattan' },
  { id: 415, cat: 'weddings', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200', title: 'Golden Hour Kiss', loc: 'Provence' },
  { id: 510, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1200', title: 'Arctic Fox', loc: 'Svalbard' },
  { id: 511, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200', title: 'Graceful Deer', loc: 'Nara' },
  { id: 512, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1200', title: 'Tiger Gaze', loc: 'India' },
  { id: 513, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200', title: 'Wild Elephant', loc: 'Serengeti' },
  { id: 514, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1551085254-e96b210db58a?q=80&w=1200', title: 'Majestic Owl', loc: 'Norway' },
  // Adding more to hit 100
  { id: 117, cat: 'landscape', src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200', title: 'Alpine Serenity', loc: 'Austria' },
  { id: 118, cat: 'landscape', src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200', title: 'Cascading Falls', loc: 'Iceland' },
  { id: 216, cat: 'portraits', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200', title: 'The Muse', loc: 'Vienna' },
  { id: 217, cat: 'portraits', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200', title: 'Shadow Soul', loc: 'Prague' },
  { id: 316, cat: 'architecture', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', title: 'Glass Ascent', loc: 'London' },
  { id: 317, cat: 'architecture', src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200', title: 'Minimalist Void', loc: 'Berlin' },
  { id: 416, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200', title: 'The Vow', loc: 'Ireland' },
  { id: 417, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200', title: 'Sunset Dance', loc: 'Spain' },
  { id: 515, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1200', title: 'Kingfisher Nest', loc: 'UK' },
  { id: 516, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200', title: 'Golden Stag', loc: 'Scotland' },
  { id: 119, cat: 'landscape', src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200', title: 'Northern Light Cache', loc: 'Lofoten' },
  { id: 120, cat: 'landscape', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200', title: 'Silent Peak', loc: 'Alps' },
  { id: 218, cat: 'portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200', title: 'Golden Bloom', loc: 'Madrid' },
  { id: 318, cat: 'architecture', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200', title: 'Spiral Staircase', loc: 'Denmark' },
  { id: 517, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200', title: 'Panda Forest', loc: 'Sichuan' },

  // Block 5 (Adding 50 more to hit ~141 total) (101-150)
  { id: 601, cat: 'landscape', src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200', title: 'Golden Fields', loc: 'Tuscany' },
  { id: 602, cat: 'landscape', src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1200', title: 'Morning Mist', loc: 'Bavaria' },
  { id: 603, cat: 'landscape', src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200', title: 'Forest Path', loc: 'Oregon' },
  { id: 604, cat: 'landscape', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200', title: 'Seaside Glow', loc: 'Amalfi' },
  { id: 605, cat: 'landscape', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200', title: 'Snow Peak', loc: 'Canada' },
  { id: 606, cat: 'landscape', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200', title: 'Rugged Coast', loc: 'California' },
  { id: 607, cat: 'landscape', src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200', title: 'Hidden Waterfall', loc: 'Iceland' },
  { id: 608, cat: 'landscape', src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200', title: 'Wild River', loc: 'Montana' },
  { id: 609, cat: 'landscape', src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200', title: 'Silver Lake', loc: 'Norway' },
  { id: 610, cat: 'landscape', src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200', title: 'Alpine Valley', loc: 'Switzerland' },
  { id: 611, cat: 'portraits', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200', title: 'Ethereal Gaze', loc: 'Paris' },
  { id: 612, cat: 'portraits', src: 'https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=1200', title: 'Intensity', loc: 'Berlin' },
  { id: 613, cat: 'portraits', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200', title: 'Soft Focus', loc: 'Stockholm' },
  { id: 614, cat: 'portraits', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200', title: 'Natural Glow', loc: 'London' },
  { id: 615, cat: 'portraits', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200', title: 'Vintage Vibe', loc: 'NYC' },
  { id: 616, cat: 'portraits', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200', title: 'Reflections', loc: 'Tokyo' },
  { id: 617, cat: 'portraits', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200', title: 'Urban Edge', loc: 'Milan' },
  { id: 618, cat: 'portraits', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200', title: 'Stark Profile', loc: 'Madrid' },
  { id: 619, cat: 'portraits', src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1200', title: 'Sun Kissed', loc: 'Sydney' },
  { id: 620, cat: 'portraits', src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200', title: 'Blue Shadows', loc: 'Copenhagen' },
  { id: 621, cat: 'architecture', src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200', title: 'Skyward Reach', loc: 'Singapore' },
  { id: 622, cat: 'architecture', src: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200', title: 'Concrete Curve', loc: 'Bilbao' },
  { id: 623, cat: 'architecture', src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200', title: 'Minimalist Void', loc: 'Kyoto' },
  { id: 624, cat: 'architecture', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200', title: 'Glass Facade', loc: 'London' },
  { id: 625, cat: 'architecture', src: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200', title: 'Silent Halls', loc: 'Rome' },
  { id: 626, cat: 'architecture', src: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=1200', title: 'Geometric Flow', loc: 'Chicago' },
  { id: 627, cat: 'architecture', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200', title: 'Spiral Symmetry', loc: 'Vatican' },
  { id: 628, cat: 'architecture', src: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1200', title: 'White Lines', loc: 'Oslo' },
  { id: 629, cat: 'architecture', src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200', title: 'Ancient Arch', loc: 'Greece' },
  { id: 630, cat: 'architecture', src: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200', title: 'Industrial Beam', loc: 'Berlin' },
  { id: 631, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200', title: 'The Vow', loc: 'Highlands' },
  { id: 632, cat: 'weddings', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200', title: 'Lace & Light', loc: 'Manor' },
  { id: 633, cat: 'weddings', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200', title: 'First Dance', loc: 'Paris' },
  { id: 634, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200', title: 'Beach Vows', loc: 'Fiji' },
  { id: 635, cat: 'weddings', src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200', title: 'Reception Glow', loc: 'London' },
  { id: 636, cat: 'weddings', src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200', title: 'Groom Portrait', loc: 'Dublin' },
  { id: 637, cat: 'weddings', src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=1200', title: 'Mountain Union', loc: 'Austria' },
  { id: 638, cat: 'weddings', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200', title: 'Golden Kiss', loc: 'Provence' },
  { id: 639, cat: 'weddings', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200', title: 'Toast to Love', loc: 'Oxford' },
  { id: 640, cat: 'weddings', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200', title: 'Floral Arch', loc: 'Kent' },
  { id: 641, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=1200', title: 'Highland Stag', loc: 'Skye' },
  { id: 642, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1200', title: 'Snow Fox', loc: 'Hokkaido' },
  { id: 643, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200', title: 'Wolf Call', loc: 'Canada' },
  { id: 644, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=1200', title: 'Majestic Eagle', loc: 'Norway' },
  { id: 645, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=1200', title: 'Nara Deer', loc: 'Japan' },
  { id: 646, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200', title: 'Lion Breath', loc: 'Kenya' },
  { id: 647, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1200', title: 'Arctic Puffin', loc: 'Iceland' },
  { id: 648, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200', title: 'Forest Panda', loc: 'China' },
  { id: 649, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?q=80&w=1200', title: 'Snowy Owl', loc: 'Svalbard' },
  { id: 650, cat: 'wildlife', src: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=1200', title: 'Jungle Leopard', loc: 'India' },
]

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState<any | null>(null)
  
  useScrollReveal()
  const imageCount = useCountUp(ARCHIVE_100.length)
  const seriesCount = useCountUp(6)

  // Interaction Logic
  useEffect(() => {
    // Reveal animation on mount is handled by hook
  }, [])

  const filtered = filter === 'all' ? ARCHIVE_100 : ARCHIVE_100.filter(i => i.cat === filter)

  // Carousel logic
  const next = useCallback((e?: any) => {
    e?.stopPropagation()
    const idx = filtered.findIndex(i => i.id === selected?.id)
    if (idx < filtered.length - 1) setSelected(filtered[idx + 1])
    else setSelected(filtered[0])
  }, [selected, filtered])

  const prev = useCallback((e?: any) => {
    e?.stopPropagation()
    const idx = filtered.findIndex(i => i.id === selected?.id)
    if (idx > 0) setSelected(filtered[idx - 1])
    else setSelected(filtered[filtered.length - 1])
  }, [selected, filtered])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  return (
    <div className="pt-32 md:pt-40 pb-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* ─── Hero Header ─── */}
        <div className="text-center mb-32 md:mb-44 reveal-hidden">
          <p className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4">The Archive</p>
          <h1 className="font-serif text-5xl md:text-8xl mb-8">
            The <span className="italic text-gold">Gallery</span>
          </h1>
          <p className="text-white/30 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            A curated archiving of light, shadow and architectural stillness. <br className="hidden md:block" />
            Every frame is a testament to the beauty of the unspoken.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 mt-16 pt-16 border-t border-white/5 max-w-2xl mx-auto">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-gold"><span ref={imageCount}>0</span></p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-2">Plates</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-gold"><span ref={seriesCount}>0</span></p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-2">Series</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-gold">08</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 mt-2">Years</p>
            </div>
          </div>
        </div>

        {/* High-End Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 reveal-hidden group/filters pb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[9px] uppercase tracking-[0.5em] font-bold transition-all duration-1000 relative px-4 py-2 group ${
                filter === cat.id ? 'text-gold' : 'text-white/30 hover:text-white/60'
              }`}
            >
              <span className="relative z-10">{cat.label}</span>
              {filter === cat.id && (
                <div className="absolute inset-0 border border-gold/20 rounded-sm scale-110 opacity-100 transition-all duration-700" />
              )}
              {/* Subtle Dot Indicator */}
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold transition-all duration-700 ${filter === cat.id ? 'opacity-40 scale-100' : 'opacity-0 scale-0 group-hover:opacity-20 group-hover:scale-100'}`} />
            </button>
          ))}
        </div>

        {/* Curated Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12">
          {filtered.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => setSelected(item)}
              className="group reveal-hidden break-inside-avoid overflow-hidden border border-white/[0.03] cursor-none bg-obsidian-light p-4 transition-all duration-700 hover:border-gold/10"
              style={{ transitionDelay: `${(idx % 3) * 0.15}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                <div className="shutter-reveal mask-expand h-full w-full">
                   <img 
                     src={item.src} 
                     alt={item.title} 
                     className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.1] group-hover:scale-100"
                     loading="lazy"
                   />
                </div>
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none" />
              </div>
              
              <div className="mt-8 space-y-3 px-2">
                  <div className="flex items-center justify-between opacity-40 group-hover:opacity-100 transition-all duration-700">
                     <p className="text-gold text-[8px] uppercase tracking-[0.6em]">{item.cat}</p>
                     <p className="text-white/40 text-[8px] font-mono">{String(idx + 1).padStart(2, '0')}</p>
                  </div>
                  <h3 className="font-serif text-xl text-white/90 group-hover:text-white transition-colors duration-700">{item.title}</h3>
                  <div className="pt-2 flex items-center gap-4">
                     <div className="w-0 group-hover:w-8 h-[1px] bg-gold/30 transition-all duration-1000" />
                     <p className="text-white/20 text-[8px] uppercase tracking-widest">{item.loc}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Elite Lightbox ─── */}
      {selected && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 xl:p-24"
          onClick={() => setSelected(null)}
        >
          {/* Controls Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
             <img src={selected.src} alt="" className="w-full h-full object-cover opacity-10 blur-3xl scale-150" />
          </div>

          <button 
            onClick={() => setSelected(null)} 
            className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center border border-white/10 rounded-full text-white/40 hover:text-white hover:border-gold/40 transition-all duration-500 z-50 text-2xl font-light"
          >
            ✕
          </button>
          
          <button 
            onClick={prev} 
            className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white/20 hover:text-gold transition-all duration-700 text-6xl font-extralight z-50 group"
          >
            <span className="transform transition-transform group-hover:-translate-x-2">‹</span>
          </button>
          
          <button 
            onClick={next} 
            className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center text-white/20 hover:text-gold transition-all duration-700 text-6xl font-extralight z-50 group"
          >
            <span className="transform transition-transform group-hover:translate-x-2">›</span>
          </button>

          {/* Image & Metadata Container */}
          <div className="relative z-10 max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center gap-12 group/lb" onClick={e => e.stopPropagation()}>
             <div className="relative overflow-hidden border border-white/[0.03] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] group">
                <img 
                  src={selected.src} 
                  alt={selected.title} 
                  className="max-h-[65vh] md:max-h-[70vh] w-auto object-contain lightbox-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
             </div>

             <div className="text-center space-y-6 animate-fade-up max-w-xl">
                <div className="space-y-2">
                   <p className="text-gold text-[9px] uppercase tracking-[0.8em] font-medium">{selected.cat}</p>
                   <h2 className="font-serif text-4xl md:text-6xl text-white italic tracking-tight">{selected.title}</h2>
                </div>
                
                <div className="flex items-center justify-center gap-6">
                   <div className="w-8 h-[1px] bg-white/10" />
                   <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-light">{selected.loc} — Studio Archive</p>
                   <div className="w-8 h-[1px] bg-white/10" />
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  )
}