// Javascript Logic - Divine's Eternity Website

// 1. DYNAMIC PRODUCT DATABASE
const PRODUCTS = [
  // CATEGORY: BOUQUETS (14 products)
  {
    id: "b1",
    name: "Blushing Romance Satin Bouquet",
    category: "bouquets",
    price: 1200,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.01 AM.jpeg",
    desc: "A gorgeous luxury bouquet featuring 12 handcrafted blush pink and creamy ivory satin roses. Wrapped in elegant textured pink paper and hand-tied with a silk ribbon.",
    specs: {
      "Rose Count": "12 Roses",
      "Materials": "Premium Satin, Frosted Wrapping",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Anniversary, Birthday, Valentine's"
    }
  },
  {
    id: "b2",
    name: "Crimson Luxury Rose Bouquet",
    category: "bouquets",
    price: 1500,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.02 AM (1).jpeg",
    desc: "A dramatic arrangement of 18 deep crimson red satin roses. Surrounded by delicate black lace netting and sleek paper with gold foil borders.",
    specs: {
      "Rose Count": "18 Roses",
      "Materials": "Luxury Satin, Black Gold Foil Paper",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Proposal, Milestone, Romantic Gift"
    }
  },
  {
    id: "b3",
    name: "Lavender Dreams Bouquet",
    category: "bouquets",
    price: 1200,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.02 AM.jpeg",
    desc: "A soothing combination of lavender, lilac, and cream satin roses. Wrapped in matching soft violet double-sided paper with elegant lace accents.",
    specs: {
      "Rose Count": "12 Roses",
      "Materials": "Double-sided Paper, Satin Ribbon",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Get Well Soon, Thank You, Birthday"
    }
  },
  {
    id: "b4",
    name: "Sunset Glow Ribbon Bouquet",
    category: "bouquets",
    price: 1300,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.03 AM (1).jpeg",
    desc: "Vibrant peach, coral, and white roses, artfully arranged to mimic the warm hues of a sunset. Elegantly wrapped in semi-transparent grid paper.",
    specs: {
      "Rose Count": "14 Roses",
      "Materials": "Tonal Satin Ribbons, Grid Wrap",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Housewarming, Congratulations, Joyful Events"
    }
  },
  {
    id: "b5",
    name: "Golden Champagne Elegance",
    category: "bouquets",
    price: 1800,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.03 AM (2).jpeg",
    desc: "The ultimate expression of luxury. 24 champagne-colored satin roses decorated with micro faux-pearls on each rose and wrapped in thick ivory paper.",
    specs: {
      "Rose Count": "24 Roses",
      "Materials": "Luxury Satin, Faux Pearls, Cream Wrap",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Weddings, VIP Gifting, Anniversaries"
    }
  },
  {
    id: "b6",
    name: "Ivory Grace Satin Bouquet",
    category: "bouquets",
    price: 1100,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.03 AM.jpeg",
    desc: "A pure and timeless classic. 10 pristine ivory white satin roses nestled in lush green silk faux-foliage, wrapped in neutral beige craft paper.",
    specs: {
      "Rose Count": "10 Roses",
      "Materials": "Faux Foliage, Kraft Paper",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Peace, Sympathy, Elegant Celebrations"
    }
  },
  {
    id: "b7",
    name: "Pink Meadow Ribbon Bouquet",
    category: "bouquets",
    price: 1250,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.04 AM (1).jpeg",
    desc: "A dreamy bouquet featuring soft baby pink and sky blue satin roses blended for a colorful, playful meadow aesthetic. Tied with a long satin bow.",
    specs: {
      "Rose Count": "12 Roses",
      "Materials": "Satin Ribbon, Double Pastel Wrap",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Baby Showers, Sweet Sixteens, Friendships"
    }
  },
  {
    id: "b8",
    name: "Scarlet Passion Bouquet",
    category: "bouquets",
    price: 1400,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.04 AM.jpeg",
    desc: "A bold arrangement of red and silver satin roses wrapped inside a premium mesh gold-dotted tulle wrap. A statement piece of handcrafted art.",
    specs: {
      "Rose Count": "15 Roses",
      "Materials": "Satin Ribbon, Gold Mesh Tulle",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Anniversary, Congratulations"
    }
  },
  {
    id: "b9",
    name: "Pastel Perfection Bouquet",
    category: "bouquets",
    price: 1200,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.05 AM (1).jpeg",
    desc: "A beautiful combination of light peach, soft lavender, and mint green ribbon roses. Wrapped in layered frosted sheets.",
    specs: {
      "Rose Count": "12 Roses",
      "Materials": "Multi-colored Satin, Frosted Paper",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "General Celebrations, Gift for Her"
    }
  },
  {
    id: "b10",
    name: "Midnight Silver Rose Bouquet",
    category: "bouquets",
    price: 1600,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.05 AM (2).jpeg",
    desc: "Unique midnight navy blue and metallic silver satin roses, wrapped in thick black matte sheets. A highly aesthetic, modern floral choice.",
    specs: {
      "Rose Count": "16 Roses",
      "Materials": "Special Metallic Satin, Matte Wrap",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Gifts for Him, Graduation, Achievements"
    }
  },
  {
    id: "b11",
    name: "Ocean Breeze Satin Bouquet",
    category: "bouquets",
    price: 1350,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.05 AM.jpeg",
    desc: "Deep turquoise, white, and pale blue ribbon roses, wrapped with matching textured ocean-blue paper. Evokes a sense of calm and beauty.",
    specs: {
      "Rose Count": "14 Roses",
      "Materials": "Custom Colored Satin, Wave Paper",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Congratulations, Office Openings"
    }
  },
  {
    id: "b12",
    name: "Sweet Violet Rose Bouquet",
    category: "bouquets",
    price: 1150,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.06 AM (1).jpeg",
    desc: "Delicate lavender and deep purple satin roses wrapped in luxury frosted semi-transparent paper. A sweet, compact design.",
    specs: {
      "Rose Count": "10 Roses",
      "Materials": "Two-tone Purple Satin, Frost Sheets",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Friendships, Thinking of You"
    }
  },
  {
    id: "b13",
    name: "Autumn Whisper Bouquet",
    category: "bouquets",
    price: 1250,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.06 AM.jpeg",
    desc: "Warm orange, burgundy, and gold satin roses wrapped in rustic organic paper. Brings a cozy autumnal vibe to any space.",
    specs: {
      "Rose Count": "12 Roses",
      "Materials": "Warm Tonal Satin, Organic Kraft",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Thanksgiving, Home Decor, Birthdays"
    }
  },
  {
    id: "b14",
    name: "Eternal Classic Red Bouquet",
    category: "bouquets",
    price: 990,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.07 AM.jpeg",
    desc: "Our signature best-selling starter bouquet. 8 vibrant red satin roses wrapped in pristine white and black luxury sheets.",
    specs: {
      "Rose Count": "8 Roses",
      "Materials": "Premium Red Satin, Dual Wrap",
      "Longevity": "Infinite (Everlasting)",
      "Occasion": "Expression of Love, Birthdays"
    }
  },

  // CATEGORY: CLUTCHERS (6 products)
  {
    id: "c1",
    name: "Elegant Pearl Hair Clutcher",
    category: "clutchers",
    price: 250,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.53 AM (1).jpeg",
    desc: "Exquisite hair claw clip lined with shimmering faux pearls. Provides a secure grip while adding an instant touch of class to your hairstyle.",
    specs: {
      "Size": "Medium (9 cm)",
      "Material": "Eco-friendly Resin, Faux Pearls",
      "Grip Type": "Double Interlocking Teeth",
      "Hair Type": "Suits Medium to Thick Hair"
    }
  },
  {
    id: "c2",
    name: "Matte Pastel Claw Clip",
    category: "clutchers",
    price: 180,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.53 AM (2).jpeg",
    desc: "Minimalist claw clip with a premium matte soft-touch finish. Gentle on the scalp, designed with rounded teeth to prevent hair breakage.",
    specs: {
      "Size": "Large (11 cm)",
      "Material": "Matte Finish Resin, Alloy Spring",
      "Grip Type": "Non-slip Matte Teeth",
      "Hair Type": "Suits Long and Thick Hair"
    }
  },
  {
    id: "c3",
    name: "Vintage Tortoiseshell Clutcher",
    category: "clutchers",
    price: 220,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.53 AM (3).jpeg",
    desc: "A timeless tortoiseshell patterned hair claw clip with a modern rectangular geometry. Strong tension spring keeps hair locked all day.",
    specs: {
      "Size": "Large (10.5 cm)",
      "Material": "Cellulose Acetate, Sturdy Steel Spring",
      "Grip Type": "Standard Teeth",
      "Hair Type": "Suits All Hair Types"
    }
  },
  {
    id: "c4",
    name: "Chic Satin Ribbon Bow Clutcher",
    category: "clutchers",
    price: 290,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.53 AM.jpeg",
    desc: "A beautiful, oversized satin ribbon bow mounted on a high-durability hair claw. Perfect for romantic, feminine half-up hairdos.",
    specs: {
      "Size": "One Size (12 cm bow)",
      "Material": "Premium Satin Fabric, Acrylic Clip",
      "Grip Type": "Hidden Claw Teeth",
      "Hair Type": "Perfect for Half-up styles"
    }
  },
  {
    id: "c5",
    name: "Gilded Blossom Rhinestone Clutcher",
    category: "clutchers",
    price: 320,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.54 AM (1).jpeg",
    desc: "A luxurious heavy-duty metal hair claw shaped like a blooming flower, decorated with sparkling rhinestones. Ideal for weddings and parties.",
    specs: {
      "Size": "Medium (8 cm)",
      "Material": "Gold-plated Alloy, Crystals",
      "Grip Type": "Weighted Metal Claws",
      "Hair Type": "Suits Fine to Medium Hair"
    }
  },
  {
    id: "c6",
    name: "Iridescent Clear Crystal Claw",
    category: "clutchers",
    price: 190,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.54 AM.jpeg",
    desc: "Sleek transparent acrylic hair claw with a subtle iridescent coating that reflects a rainbow of colors as it catches the light.",
    specs: {
      "Size": "Large (11 cm)",
      "Material": "Iridescent Acrylic, Metal Spring",
      "Grip Type": "Clear Interlocking Teeth",
      "Hair Type": "Suits All Hair Lengths"
    }
  },

  // CATEGORY: FRAMES (4 products)
  {
    id: "f1",
    name: "Eternity Blossom Shadowbox Frame",
    category: "frames",
    price: 750,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.18 AM (1).jpeg",
    desc: "Preserve your feelings forever. This 3D shadowbox frame displays handcrafted satin roses and preserved filler flowers in a deep wood case.",
    specs: {
      "Frame Size": "8 x 8 inches",
      "Materials": "MDF Wood, Glass, Satin Ribbon",
      "Mounting": "Tabletop Stand & Wall Mount",
      "Customization": "Available for custom initials"
    }
  },
  {
    id: "f2",
    name: "Golden Harmony Flower Frame",
    category: "frames",
    price: 850,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.18 AM (2).jpeg",
    desc: "A stunning gold-bordered frame housing a curated arrangement of handmade satin flowers. Features luxury gold foil typography inside.",
    specs: {
      "Frame Size": "9 x 9 inches",
      "Materials": "Metal Edge Glass Frame, Satin Ribbon",
      "Mounting": "Tabletop Display Only",
      "Customization": "Custom names can be printed"
    }
  },
  {
    id: "f3",
    name: "Preserved Love LED Rose Frame",
    category: "frames",
    price: 950,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.18 AM.jpeg",
    desc: "Make your gifts glow. Features hand-woven satin roses highlighted by battery-operated micro-fairy copper lights, housed in a deep shadowbox.",
    specs: {
      "Frame Size": "10 x 10 inches",
      "Materials": "Deep Wooden Box, LED lights, Satin",
      "Lighting": "Warm White LED (Switch on back)",
      "Customization": "Custom date or quote available"
    }
  },
  {
    id: "f4",
    name: "Minimalist Pressed Petal Frame",
    category: "frames",
    price: 650,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.19 AM.jpeg",
    desc: "A sleek transparent glass frame showcasing dried and pressed flower petals. Perfect for adding a modern botanic aesthetic to work desks.",
    specs: {
      "Frame Size": "6 x 6 inches",
      "Materials": "Double-glass Float Frame, Dried Petals",
      "Mounting": "Desk Easel Display",
      "Customization": "Letter decal customization"
    }
  },

  // CATEGORY: HAMPERS (2 products)
  {
    id: "h1",
    name: "Divine Eternity Signature Hamper",
    category: "hampers",
    price: 1800,
    image: "assets/bouquets/WhatsApp Image 2026-06-06 at 6.39.03 AM.jpeg",
    desc: "Our flagship luxury hamper box. Contains an organic scented candle, a pack of gourmet dark chocolates, a pearl hair clutcher, a satin rose, and a handwritten greeting card.",
    specs: {
      "Box Type": "Hardboard Gift Box (Magnetic)",
      "Inclusions": "Candle, Chocolates, Clutcher, Rose, Card",
      "Customizable": "Fully Customizable items",
      "Dimensions": "10 x 10 x 4 inches"
    }
  },
  {
    id: "h2",
    name: "Celebration Special Gift Hamper",
    category: "hampers",
    price: 2500,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.18 AM.jpeg",
    desc: "A grand curation designed for massive celebrations. Features a customized LED rose frame, a set of 2 premium silk scrunchies, gourmet coffee, a metallic clutcher, and a greeting card.",
    specs: {
      "Box Type": "Gold foil Hexagonal Tray Box",
      "Inclusions": "LED Frame, 2 Scrunchies, Coffee, Clutcher, Card",
      "Customizable": "Select frame designs",
      "Dimensions": "12 x 12 x 5 inches"
    }
  },

  // CATEGORY: JEWELLERY (2 products)
  {
    id: "j1",
    name: "Minimalist Pearl Harmony Necklace",
    category: "jewellery",
    price: 650,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.18 AM (1).jpeg",
    desc: "A delicate necklace made with high-quality natural freshwater pearls threaded with gold-plated accent beads. Offers a modern minimalist look.",
    specs: {
      "Length": "16 inches + 2 inch extender",
      "Material": "Freshwater Pearls, 18k Gold Plated Brass",
      "Clasp": "Lobster Claw Clasp",
      "Care": "Keep away from water & perfume"
    }
  },
  {
    id: "j2",
    name: "Gilded Butterfly Charm Bracelet",
    category: "jewellery",
    price: 400,
    image: "assets/Frames/WhatsApp Image 2026-06-06 at 6.41.18 AM (2).jpeg",
    desc: "A gorgeous gold charm bracelet featuring tiny butterfly designs and star charms. Drapes beautifully and is fully adjustable.",
    specs: {
      "Size": "Adjustable (fits wrists 6-8 inches)",
      "Material": "18k Gold Plated Alloy",
      "Weight": "Lightweight (12g)",
      "Design": "Gilded Charms"
    }
  },

  // CATEGORY: SCRUNCHIES (2 products)
  {
    id: "s1",
    name: "Pastel Silk Scrunchie Duo",
    category: "scrunchies",
    price: 350,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.54 AM.jpeg",
    desc: "A pack of two premium silk scrunchies in pastel shades. Made with grade-A mulberry silk to prevent hair friction, creasing, and damage.",
    specs: {
      "Pack Count": "2 Scrunchies",
      "Material": "100% Mulberry Silk",
      "Width": "Large (4cm)",
      "Elasticity": "Strong stretch, gentle hold"
    }
  },
  {
    id: "s2",
    name: "Fluffy Organza Dream Scrunchie",
    category: "scrunchies",
    price: 150,
    image: "assets/clutchers/WhatsApp Image 2026-06-06 at 6.48.53 AM (1).jpeg",
    desc: "An oversized, fluffy organza scrunchie in snow white. Adds massive volume and style to buns, braids, and pony-tails.",
    specs: {
      "Pack Count": "1 Scrunchie",
      "Material": "Premium Sheer Organza",
      "Width": "Oversized (6cm)",
      "Occasion": "Party wear, Daily accessories"
    }
  }
];

// 2. MAIN APPLICATION LOGIC
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // A. NAVBAR SCROLL EFFECT
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
      } else {
        // Remove background only if on homepage and window is wide
        const isHomepage = window.location.pathname.includes("index.html") || 
                           window.location.pathname === "/" || 
                           window.location.pathname.endsWith("divines-eternity/");
        if (isHomepage && window.innerWidth > 768) {
          navbar.classList.remove("navbar-scrolled");
        } else {
          navbar.classList.add("navbar-scrolled");
        }
      }
    };
    
    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll(); // Initial load check
  }

  // B. NAVIGATION ACTIVE LINK HIGHLIGHTING
  const currentPath = window.location.pathname;
  let pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
  if (pageName === "") pageName = "index.html";
  
  const navLinks = document.querySelectorAll(".nav-link, .drawer-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href) {
      if (href === pageName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });

  // C. MOBILE MENU DRAWER
  const menuToggleBtn = document.getElementById("menu-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  if (menuToggleBtn && mobileDrawer) {
    menuToggleBtn.addEventListener("click", () => {
      mobileDrawer.classList.toggle("drawer-open");
      const isOpened = mobileDrawer.classList.contains("drawer-open");
      menuToggleBtn.innerHTML = isOpened ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
      lucide.createIcons();
    });
  }

  // D. HERO SLIDESHOW (Home Page only)
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");
  if (slides.length > 0 && dots.length > 0) {
    let currentSlide = 0;
    
    const showSlide = (index) => {
      slides[currentSlide].classList.remove("slide-active");
      dots[currentSlide].classList.remove("dot-active");
      currentSlide = index;
      slides[currentSlide].classList.add("slide-active");
      dots[currentSlide].classList.add("dot-active");
    };

    // Auto rotate slides every 6 seconds
    let slideInterval = setInterval(() => {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, 6000);

    // Dot click interaction
    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        clearInterval(slideInterval);
        const index = parseInt(e.target.getAttribute("data-index"));
        showSlide(index);
        slideInterval = setInterval(() => {
          let next = (currentSlide + 1) % slides.length;
          showSlide(next);
        }, 6000);
      });
    });
  }

  // E. DYNAMIC PRODUCT CATALOG (Collections Page only)
  const dynamicProductGrid = document.getElementById("dynamic-product-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  if (dynamicProductGrid) {
    let activeFilter = "all";
    let searchQuery = "";
    let activeSort = "featured";

    // 1. Render function
    const renderCatalog = () => {
      // Filter the items
      let filtered = PRODUCTS.filter(prod => {
        const matchesCategory = (activeFilter === "all" || prod.category === activeFilter);
        const matchesSearch = prod.name.toLowerCase().includes(searchQuery) || 
                              prod.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

      // Sort the items
      if (activeSort === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
      } else if (activeSort === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
      } else if (activeSort === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      // Clear the grid
      dynamicProductGrid.innerHTML = "";

      // Handle empty state
      if (filtered.length === 0) {
        dynamicProductGrid.innerHTML = `
          <div class="no-products-msg reveal">
            <i data-lucide="alert-circle" style="width: 48px; height: 48px;"></i>
            <h3>No Products Found</h3>
            <p>We couldn't find any items matching your criteria. Try adjusting your filters or search keywords.</p>
          </div>
        `;
        if (typeof lucide !== "undefined") lucide.createIcons();
        return;
      }

      // Render cards
      filtered.forEach(prod => {
        const card = document.createElement("div");
        card.className = "prod-card reveal";
        card.setAttribute("data-id", prod.id);
        
        // Map slug category to readable badge
        const badgeNames = {
          hampers: "Hamper",
          bouquets: "Bouquet",
          frames: "Frame",
          clutchers: "Clutcher",
          jewellery: "Jewellery",
          scrunchies: "Scrunchie"
        };
        const badge = badgeNames[prod.category] || prod.category;

        card.innerHTML = `
          <div class="prod-img-box">
            <img src="${prod.image}" alt="${prod.name}" class="prod-img" loading="lazy">
            <span class="prod-cat-badge">${badge}</span>
          </div>
          <div class="prod-body">
            <div>
              <h3 class="prod-title">${prod.name}</h3>
              <p class="prod-desc">${prod.desc.length > 80 ? prod.desc.substring(0, 80) + '...' : prod.desc}</p>
            </div>
            <div class="prod-footer">
              <span class="prod-price">₹${prod.price.toLocaleString('en-IN')}</span>
              <button class="prod-btn view-details-trigger">Quick View <i data-lucide="eye" style="width: 14px; height: 14px;"></i></button>
            </div>
          </div>
        `;
        dynamicProductGrid.appendChild(card);
      });

      // Hook up modal click triggers on new cards
      const triggers = dynamicProductGrid.querySelectorAll(".view-details-trigger");
      triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
          e.stopPropagation();
          const card = trigger.closest(".prod-card");
          const prodId = card.getAttribute("data-id");
          openQuickView(prodId);
        });
      });

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    };

    // 2. Set filters from URL parameters if present
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("cat");
    if (catParam) {
      const targetBtn = document.querySelector(`.filter-btn[data-filter="${catParam}"]`);
      if (targetBtn) {
        filterButtons.forEach(btn => btn.classList.remove("filter-btn-active"));
        targetBtn.classList.add("filter-btn-active");
        activeFilter = catParam;
      }
    }

    // 3. Attach Event Listeners
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("filter-btn-active"));
        btn.classList.add("filter-btn-active");
        activeFilter = btn.getAttribute("data-filter");
        renderCatalog();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderCatalog();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        activeSort = e.target.value;
        renderCatalog();
      });
    }

    // Run initial render
    renderCatalog();
  }

  // F. RAZORPAY STANDARD FRONTEND CHECKOUT UTILITY
  window.payWithRazorpay = function(amount, description, prefillData, onSuccessCallback) {
    if (typeof Razorpay === "undefined") {
      alert("Razorpay payment gateway could not be loaded. Please check your internet connection.");
      return;
    }

    const options = {
      "key": "rzp_test_defaultKey", // Replace with your live key: e.g. rzp_live_xxxxxxxx
      "amount": amount * 100, // Amount in paise (1 INR = 100 paise)
      "currency": "INR",
      "name": "Divine's Eternity",
      "description": description,
      "image": "assets/logo.svg",
      "handler": function (response) {
        if (response && response.razorpay_payment_id) {
          onSuccessCallback(response.razorpay_payment_id);
        } else {
          alert("Payment processed but no transaction reference ID was returned.");
        }
      },
      "prefill": {
        "name": prefillData.name || "",
        "contact": prefillData.phone || ""
      },
      "theme": {
        "color": "#d26177" // premium rose pink accent
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  // G. LIGHTBOX / QUICK VIEW MODAL CONTROLLER
  const qvModal = document.getElementById("quickview-modal");
  const qvCloseBtn = document.getElementById("quickview-close-btn");
  
  const openQuickView = (prodId) => {
    const prod = PRODUCTS.find(p => p.id === prodId);
    if (!prod || !qvModal) return;

    // Map category slugs
    const badgeNames = {
      hampers: "Hamper",
      bouquets: "Bouquet",
      frames: "Frame",
      clutchers: "Clutcher",
      jewellery: "Jewellery",
      scrunchies: "Scrunchie"
    };

    // Populate Modal Content
    document.getElementById("quickview-img").src = prod.image;
    document.getElementById("quickview-img").alt = prod.name;
    document.getElementById("quickview-badge").textContent = badgeNames[prod.category] || prod.category;
    document.getElementById("quickview-title").textContent = prod.name;
    document.getElementById("quickview-price").textContent = `₹${prod.price.toLocaleString('en-IN')}`;
    document.getElementById("quickview-desc").textContent = prod.desc;

    // Render Specifications list
    const specsList = document.getElementById("quickview-specs-list");
    specsList.innerHTML = "";
    if (prod.specs) {
      Object.entries(prod.specs).forEach(([key, val]) => {
        const item = document.createElement("div");
        item.className = "quickview-spec-item";
        item.innerHTML = `<strong>${key}:</strong> <span>${val}</span>`;
        specsList.appendChild(item);
      });
    }

    // Hook WhatsApp Enquiry Action Button inside Modal
    const enquireBtn = document.getElementById("quickview-enquire-btn");
    if (enquireBtn) {
      enquireBtn.onclick = () => {
        handleProductEnquiry(prod.name, prod.price);
      };
    }

    // Hook Razorpay Prepay Action Button inside Modal
    const prepayBtn = document.getElementById("quickview-prepay-btn");
    if (prepayBtn) {
      prepayBtn.onclick = () => {
        closeQuickView();
        window.payWithRazorpay(prod.price, `Order: ${prod.name}`, {}, (paymentId) => {
          // Trigger Confetti
          if (typeof confetti !== "undefined") {
            confetti({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.6 }
            });
          }

          // Open WhatsApp with Paid Receipt
          const textMsg = `*Divine's Eternity Paid Order* 🌸\n\nHello Sonu, I have pre-paid for the *${prod.name}* (estimated: ₹${prod.price.toLocaleString('en-IN')}).\n\n*Payment Status*: PAID via Razorpay\n*Transaction ID*: ${paymentId}\n\n_Please confirm delivery details._`;
          const whatsappUrl = `https://wa.me/919353652043?text=${encodeURIComponent(textMsg)}`;
          window.open(whatsappUrl, '_blank');
        });
      };
    }

    // Activate Modal and lock scroll
    qvModal.classList.add("quickview-active");
    document.body.classList.add("quickview-body-lock");
    if (typeof lucide !== "undefined") lucide.createIcons();
  };

  const closeQuickView = () => {
    if (!qvModal) return;
    qvModal.classList.remove("quickview-active");
    document.body.classList.remove("quickview-body-lock");
  };

  if (qvCloseBtn) {
    qvCloseBtn.addEventListener("click", closeQuickView);
  }

  if (qvModal) {
    // Close modal on background clicks
    qvModal.addEventListener("click", (e) => {
      if (e.target === qvModal) {
        closeQuickView();
      }
    });
  }

  // H. GLOBAL PRODUCT WHATSAPP ENQUIRY REDIRECTION
  window.handleProductEnquiry = function(prodName, prodPrice) {
    const textMsg = `*Divine's Eternity Product Enquiry* 🌸\n\nHello Sonu, I would like to check availability and place an order for the *${prodName}* (estimated: ₹${prodPrice.toLocaleString('en-IN')}).\n\n_Please confirm availability and share details._`;
    const whatsappUrl = `https://wa.me/919353652043?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, '_blank');
  };

  // I. DYNAMIC HAMPER BUILDER FORM & CALCULATOR (Booking Page only)
  const formBooking = document.getElementById("form-booking");
  if (formBooking) {
    const checkboxes = document.querySelectorAll(".builder-checkbox");
    const subtotalText = document.getElementById("calc-subtotal");
    const totalText = document.getElementById("calc-total");
    const cardMsgGroup = document.getElementById("card-msg-group");
    const itemCardCheckbox = document.getElementById("item-card");

    const updateCalculations = () => {
      let subtotal = 0;
      
      checkboxes.forEach(cb => {
        const label = document.getElementById(`lbl-${cb.id.replace("item-", "")}`);
        
        if (cb.checked) {
          if (label) label.classList.add("builder-checked");
          const price = parseInt(cb.getAttribute("data-price")) || 0;
          subtotal += price;
        } else {
          if (label) label.classList.remove("builder-checked");
        }
      });

      const total = 200 + subtotal; // 200 is base box & packaging rate
      
      if (subtotalText) subtotalText.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
      if (totalText) totalText.textContent = `₹${total.toLocaleString('en-IN')}`;

      // Toggle greeting message card input visibility
      if (itemCardCheckbox && cardMsgGroup) {
        cardMsgGroup.style.display = itemCardCheckbox.checked ? "flex" : "none";
      }
    };

    // Attach listeners to builder checkboxes
    checkboxes.forEach(cb => {
      cb.addEventListener("change", updateCalculations);
    });

    // Handle Custom Booking Submit
    formBooking.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("cust-name").value;
      const phone = document.getElementById("cust-phone").value;
      const date = document.getElementById("delivery-date").value;
      const address = document.getElementById("delivery-addr").value;
      
      if (!name || !phone || !date || !address) return;

      // Extract checked items names
      let selectedItems = ["Luxury Hamper Box & Packing (₹200)"];
      let subtotalVal = 0;

      checkboxes.forEach(cb => {
        if (cb.checked) {
          const itemName = cb.parentElement.querySelector(".builder-item-name").textContent;
          const itemPrice = cb.getAttribute("data-price");
          selectedItems.push(`${itemName} (₹${itemPrice})`);
          subtotalVal += parseInt(itemPrice);
        }
      });

      const totalVal = 200 + subtotalVal;
      const cardMsg = itemCardCheckbox && itemCardCheckbox.checked ? document.getElementById("card-message").value : "";

      // Check payment selection
      const payPrebookRadio = document.getElementById("pay-prebook");
      const isRazorpay = payPrebookRadio && payPrebookRadio.checked;

      // Success callback formatter function
      const sendWhatsAppOrder = (paymentId = null) => {
        let textMsg = `*Divine's Eternity Custom Hamper Order* 🎁\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Requested Delivery Date*: ${date}\n*Bangalore Address*: ${address}\n\n*Items Selected*:\n`;
        selectedItems.forEach(item => {
          textMsg += `- ${item}\n`;
        });
        
        if (cardMsg) {
          textMsg += `\n*Handwritten Greeting Message*: "${cardMsg}"\n`;
        }

        textMsg += `\n*Estimated Total*: ₹${totalVal.toLocaleString('en-IN')}\n`;
        if (paymentId) {
          textMsg += `*Payment Status*: PAID via Razorpay\n*Transaction ID*: ${paymentId}\n\n_Please confirm design schedule._`;
        } else {
          textMsg += `*Payment Status*: Chat & Confirm (COD/Transfer)\n\n_Please confirm details and share advance payment link._`;
        }

        // Trigger Confetti Burst
        if (typeof confetti !== "undefined") {
          confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
          });
        }

        // Open WhatsApp redirection
        setTimeout(() => {
          const whatsappUrl = `https://wa.me/919353652043?text=${encodeURIComponent(textMsg)}`;
          window.open(whatsappUrl, '_blank');
        }, 1000);
      };

      if (isRazorpay) {
        // Run Razorpay first
        window.payWithRazorpay(totalVal, "Custom Gift Hamper Prebook", { name: name, phone: phone }, (paymentId) => {
          sendWhatsAppOrder(paymentId);
        });
      } else {
        // Free WhatsApp inquiry
        sendWhatsAppOrder();
      }
    });

    // Run initial calculations
    updateCalculations();
  }

  // J. CONTACT & WHOLESALE INQUIRY FORM (Contact Page only)
  const formContact = document.getElementById("form-contact");
  if (formContact) {
    formContact.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("inq-name").value;
      const phone = document.getElementById("inq-phone").value;
      const type = document.getElementById("inq-type").value;
      const details = document.getElementById("inq-details").value;
      
      if (!name || !phone || !details) return;

      const textMsg = `*Divine's Eternity Enquiry* 💬\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Category*: ${type}\n\n*Details / Requirements*:\n${details}\n\n_Please respond back with rates and collab possibilities._`;

      // Trigger Confetti
      if (typeof confetti !== "undefined") {
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.6 }
        });
      }

      // Show success visual alert
      const alertDiv = document.getElementById("success-alert");
      if (alertDiv) alertDiv.style.display = "flex";

      // Redirect to WhatsApp
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/919353652043?text=${encodeURIComponent(textMsg)}`;
        window.open(whatsappUrl, '_blank');
      }, 1200);
    });
  }
});
