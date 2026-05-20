/**
 * Ema-Mart Client Runtime Automation Engine
 * Coordinates 50 Granular Inventory Items, Category Filters, and 5.3s Delayed Ad Modals.
 */

// Massive Distributed 50-Item Retail Inventory Simulated Database
const INVENTORY_CATALOG = [
    // APPAREL SECTION (1-10): Women, Men, Kids
    { id: 2, title: "Men Slim-Fit Wool Blazer", category: "Clothes", subCategory: "Men", price: 8500, discount: 10, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80", desc: "Structured business formal jacket constructed from fine premium Italian worsted yarn handles." },
    { id: 3, title: "Kids Organic Cotton Set", category: "Clothes", subCategory: "Kids", price: 2100, discount: 0, img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=400&q=80", desc: "Hypoallergenic ultra-soft jersey trousers and top set optimized for toddler playground wear." },
    { id: 4, title: "Classic Swahili Linen Dress", category: "Clothes", subCategory: "Women", price: 3800, discount: 0, img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80", desc: "Flowing coastal daily apparel accentuating traditional ventilation weave methodologies." },
    { id: 5, title: "Water-Resistant Windbreaker", category: "Clothes", subCategory: "Men", price: 4950, discount: 20, img: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=400&q=80", desc: "High-density nylon shells engineered for unpredictable outdoor climate precipitation." },
    { id: 6, title: "Kids Fleece Hooded Parka", category: "Clothes", subCategory: "Kids", price: 2800, discount: 5, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80", desc: "Thick synthetic insulation blankets providing high-efficiency body core temperature retention." },
    { id: 7, title: "Boho Pleated Maxi Skirt", category: "Clothes", subCategory: "Women", price: 2900, discount: 0, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80", desc: "Vibrant high-rise elastic waist drapes capturing loose flowing lifestyle profiles cleanly." },
    { id: 8, title: "Men Performance Gym Shorts", category: "Clothes", subCategory: "Men", price: 1750, discount: 0, img: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=400&q=80", desc: "Moisture-wicking mesh fibers featuring anti-chafing mechanical stretch liners inside." },
    { id: 10, title: "Women Formal Chiffon Blouse", category: "Clothes", subCategory: "Women", price: 2600, discount: 0, img: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?auto=format&fit=crop&w=400&q=80", desc: "Semi-sheer workplace shirts tailored with reinforced collar seams for sharp profile lifespans." },

    // ELECTRONICS SECTION (11-20): TVs, Audio, Pods, Phones & Accessories
    { id: 11, title: "Ema-Lux 55\" Ultra HD 4K TV", category: "Electronics", subCategory: "TVs", price: 58000, discount: 10, img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80", desc: "Quantum dot panel configurations pushing brilliant contrast spectrum matrices natively." },
    { id: 12, title: "Super-Bass Bass Cannon Radio", category: "Electronics", subCategory: "Radios", price: 9200, discount: 0, img: "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&w=400&q=80", desc: "High-density solid wood audio cabinets with built-in digital tuning processing loops." },
    { id: 13, title: "Pro ANC Wireless Earpods", category: "Electronics", subCategory: "Earpods", price: 4500, discount: 25, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80", desc: "Dynamic active acoustic cancelation matrices coupled with secure gym fitting hooks." },
    { id: 14, title: "Samsung Galaxy Flagship AI", category: "Electronics", subCategory: "Phones", price: 115000, discount: 5, img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=400&q=80", desc: "Next-gen camera optics processing paired with native structural computing cores." },
    { id: 15, title: "iPhone Pro Max Edition", category: "Electronics", subCategory: "Phones", price: 165000, discount: 0, img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&q=80", desc: "Aerospace-grade titanium framing encasing extreme frame-rate gaming system pipelines." },
    { id: 17, title: "Premium Armored Phone Shield", category: "Electronics", subCategory: "Accessories", price: 1200, discount: 0, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80", desc: "Multi-layered TPU dampening protective boundaries designed to survive extreme concrete drop forces." },
    { id: 18, title: "Cinematic Home Soundbar Engine", category: "Electronics", subCategory: "Audio", price: 24500, discount: 8, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=80", desc: "Multi-channel spatial audio drivers projecting wrapping soundstage acoustics seamlessly." },
    { id: 19, title: "Studio Monitoring Headphones", category: "Electronics", subCategory: "Audio", price: 13900, discount: 0, img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=400&q=80", desc: "Flat frequency baseline response profiles engineered for surgical audio track mixing precision." },
    { id: 20, title: "Ultra-Speed Type-C Power Brick", category: "Electronics", subCategory: "Accessories", price: 2800, discount: 0, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80", desc: "Gallium Nitride (GaN) microchips deploying massive safe amperage wattages concurrently." },

    // FOOTWEAR SECTION (21-30): Men, Women, Kids
    { id: 21, title: "Men Carbon Stability Runners", category: "Footwear", subCategory: "Men", price: 9500, discount: 18, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80", desc: "Internal carbon composite bounce plates translating downward impact directly into forward kinetic steps." },
    { id: 22, title: "Women Suede Block Stilettos", category: "Footwear", subCategory: "Women", price: 6200, discount: 0, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80", desc: "Hand-brushed organic suede leathers shaped with orthopedic arch support distributions." },
    { id: 23, title: "Kids Light-Up Sport Sneaker", category: "Footwear", subCategory: "Kids", price: 3100, discount: 0, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80", desc: "Impact-sensitive heel LEDs encased in dense, protective shock-absorbing rubber bases." },
    { id: 24, title: "Classic Premium Leather Oxfords", category: "Footwear", subCategory: "Men", price: 12000, discount: 10, img: "https://images.unsplash.com/photo-1486308510493-aa64833637bc?auto=format&fit=crop&w=400&q=80", desc: "Full-grain calfskins treated over vegetable tanning solution drums for deep leather durability." },
    { id: 25, title: "Women Active Cushion Trainers", category: "Footwear", subCategory: "Women", price: 7400, discount: 0, img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=400&q=80", desc: "Breathable mesh configurations providing complete airflow circulation loops across long fitness routines." },
    { id: 26, title: "Kids Waterproof Winter Boots", category: "Footwear", subCategory: "Kids", price: 4200, discount: 15, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80", desc: "Seam-sealed rubber dynamic outsoles blocking deep liquid muck elements from seeping into internal lining socks." },
    { id: 27, title: "Unisex Urban Canvas Low-Tops", category: "Footwear", subCategory: "Men", price: 3900, discount: 0, img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80", desc: "Vulcanized rubber wall bindings providing long structural lifespan tolerances." },
    { id: 28, title: "Women Orthopedic Comfort Flats", category: "Footwear", subCategory: "Women", price: 4800, discount: 5, img: "https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?auto=format&fit=crop&w=400&q=80", desc: "Memory foam custom indentation footbeds easing plantar skeletal point burdens efficiently." },
    { id: 29, title: "Kids Slip-On Foam Play Shoes", category: "Footwear", subCategory: "Kids", price: 1950, discount: 0, img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=400&q=80", desc: "Floatable injection-molded EVA structures making sanitation cycles simple after outdoor mud exposure." },
    { id: 30, title: "Men Rough-Terrain Hiking Boots", category: "Footwear", subCategory: "Men", price: 13500, discount: 0, img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=400&q=80", desc: "Aggressive lug tooth outsoles offering high grip traction across challenging mountain scree paths." },

    // HOUSEHOLD SECTION (31-40): Kitchen, Bathroom, Dining, Bedroom
    { id: 34, title: "Memory Foam Ergonomic Pillow", category: "Household", subCategory: "Bedroom", price: 4600, discount: 20, img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80", desc: "Contoured anatomical spinal layout molds aligning cervical segments correctly through sleep cycles." },
    { id: 35, title: "Digital Air Fryer Convection Oven", category: "Household", subCategory: "Kitchen", price: 16500, discount: 0, img: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&w=400&q=80", desc: "Super-heated cyclone current airflow loops cooking crispy textures without dense grease additions." },
    { id: 36, title: "Anti-Bacterial Bathroom Grip Rug", category: "Household", subCategory: "Bathroom", price: 1800, discount: 0, img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80", desc: "Fast-drying open cell microfiber strands anchored onto high-friction non-slip rubber mats." },
    { id: 37, title: "Crystal Stemware Wine Glasses", category: "Household", subCategory: "Dining", price: 5200, discount: 15, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", desc: "Lead-free crystal sound-resonant glass engineering presenting ultra-clear clarity profiles." },
    { id: 38, title: "Hotel-Grade 800TC Sheet Set", category: "Household", subCategory: "Bedroom", price: 11000, discount: 0, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80", desc: "Sateen weave long-fiber cotton sheets producing smooth friction-free skin contact zones." },
    { id: 40, title: "Dimmable Bedside Touch Lamp", category: "Household", subCategory: "Bedroom", price: 3200, discount: 0, img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80", desc: "Soft warm glowing 2700K luminance spectrum filters shielding retinas from blue light strain spikes." },

    // LADIES' BEAUTY SECTION (41-45): Makeups, Jewelry & Luxury Colognes
    { id: 41, title: "Matte Foundation Complex Serum", category: "Beauty", subCategory: "Makeups", price: 2900, discount: 10, img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80", desc: "Long-lasting 24-hour hydration skin coverage shielding pores from environmental particulate entries." },
    { id: 42, title: "18K Gold Plated Leaf Pendant", category: "Beauty", subCategory: "Jewelry", price: 14500, discount: 0, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80", desc: "Hypoallergenic sterling silver cores electro-fused inside rich warm precious metal surfaces." },
    { id: 43, title: "Hydrating Hyaluronic Lip Gloss", category: "Beauty", subCategory: "Makeups", price: 1600, discount: 0, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80", desc: "Micro-encapsulated humectant lock spheres reflecting radiant moisture glow properties safely." },
    { id: 44, title: "Velvet Matte Eyeshadow Palette", category: "Beauty", subCategory: "Makeups", price: 3400, discount: 25, img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80", desc: "Highly pigmented dynamic powder minerals preventing creasing artifacts across eyelid folds." },
    // MEN & KIDS SECTION (46-50): Jerseys, Colognes, Toys & Action Figures
    { id: 46, title: "Harambee Stars Stadium Jersey", category: "Toys", subCategory: "Men", price: 3500, discount: 0, img: "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?auto=format&fit=crop&w=400&q=80", desc: "Authentic crest tailoring displaying elite moisture management fabric ventilation systems." },
    { id: 47, title: "Midnight Leather Smoked Cologne", category: "Toys", subCategory: "Men", price: 6800, discount: 15, img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80", desc: "Bold base profiles balancing crisp high citrus oils over dark wood tobacco scent paths." },
    { id: 48, title: "Programmable Smart STEM Robot", category: "Toys", subCategory: "Kids", price: 8900, discount: 0, img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80", desc: "Visual drag-and-drop block code logic execution matrices training youth logic processing." },
    { id: 50, title: "Alloy Die-Cast Hypercar Replica", category: "Toys", subCategory: "Kids", price: 4300, discount: 0, img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=400&q=80", desc: "Electrostatic spray finishes matching real factory architectural dimension details down to scale." }
];

// Application Core Memory Lifecycle State
let appState = {
    activeView: 'storefront',
    authSelectionMode: 'login',
    authenticatedUser: null,
    shoppingCart: []
};

// Mount Event Handlers once DOM parsing settles safely
document.addEventListener('DOMContentLoaded', () => {
    renderProductGrid(INVENTORY_CATALOG);
    refreshCartStateUI();
    initializeAdPortalTimer();
});

/**
 * Iterates item data sets and prints HTML template blocks into the view container grid.
 * Computes sale markdown metrics natively when discount modifiers exist.
 */
function renderProductGrid(itemsSourceArray) {
    const gridContainer = document.getElementById('product-grid-container');
    if (!gridContainer) return;

    if (itemsSourceArray.length === 0) {
        gridContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-search display-3 text-muted mb-3"></i>
                <p class="text-muted fw-medium">No inventory items match your search parameter queries.</p>
            </div>
        `;
        return;
    }

    gridContainer.innerHTML = itemsSourceArray.map(product => {
        const carriesDiscount = product.discount > 0;
        // Calculation: Sale = Price * (1 - Discount / 100)
        const finalizedSalePrice = carriesDiscount ? product.price * (1 - product.discount / 100) : product.price;

        return `
            <div class="col-md-6 col-lg-3">
                <div class="card product-card h-100 shadow-sm">
                    <div class="img-frame">
                        <span class="retail-tag">${product.subCategory}</span>
                        ${carriesDiscount ? `<span class="discount-badge">-${product.discount}% OFF</span>` : ''}
                        <img src="${product.img}" class="product-img" alt="${product.title}" loading="lazy">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between p-3">
                        <div>
                            <h6 class="fw-bold text-dark mb-1" style="font-size:0.85rem; height:40px; overflow:hidden;">${product.title}</h6>
                            <p class="text-muted small mb-2" style="font-size: 0.75rem; line-height: 1.4; height:50px; overflow:hidden;">${product.desc}</p>
                        </div>
                        <div class="pt-2">
                            <div class="mb-2">
                                ${carriesDiscount ? `
                                    <span class="text-danger fw-bold fs-5">KSh ${finalizedSalePrice.toLocaleString()}</span>
                                    <span class="text-muted text-decoration-line-through small ms-2" style="font-size:0.75rem;">KSh ${product.price.toLocaleString()}</span>
                                ` : `
                                    <span class="text-dark fw-bold fs-5">KSh ${product.price.toLocaleString()}</span>
                                `}
                            </div>
                            <button class="btn btn-action btn-sm w-100 py-2" onclick="pushToCart(${product.id})">
                                <i class="bi bi-cart-plus me-1"></i> Add to Container
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Filter product array nodes by checking criteria allocations dynamically
 */
function filterCatalogByGroup(targetGroupString, interactiveContextButton) {
    // Synchronize selected structural menu CSS button states
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active-filter'));
    interactiveContextButton.classList.add('active-filter');

    const headingLabel = document.getElementById('grid-header-label');

    if (targetGroupString === 'all') {
        headingLabel.innerText = "All Available Merchandise";
        renderProductGrid(INVENTORY_CATALOG);
    } else if (targetGroupString === 'Discounts') {
        headingLabel.innerText = "Hot Active Discount Markdowns";
        const subset = INVENTORY_CATALOG.filter(item => item.discount > 0);
        renderProductGrid(subset);
    } else {
        headingLabel.innerText = `${targetGroupString} Department Catalog`;
        const subset = INVENTORY_CATALOG.filter(item => item.category === targetGroupString);
        renderProductGrid(subset);
    }
}

/**
 * Live Substring Search Input Parser
 */
function handleLiveSearch(inputQueryString) {
    const sanitizedSearchText = inputQueryString.toLowerCase().trim();
    const matchesSubset = INVENTORY_CATALOG.filter(item => 
        item.title.toLowerCase().includes(sanitizedSearchText) || 
        item.desc.toLowerCase().includes(sanitizedSearchText) ||
        item.category.toLowerCase().includes(sanitizedSearchText) ||
        item.subCategory.toLowerCase().includes(sanitizedSearchText)
    );
    renderProductGrid(matchesSubset);
}

/**
 * SPA State Navigation Controller
 */
function showSection(viewId) {
    appState.activeView = viewId;
    document.querySelectorAll('.view-section').forEach(section => section.classList.add('d-none'));
    
    const targetElement = document.getElementById(viewId);
    if (targetElement) targetElement.classList.remove('d-none');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Toggles Sign In and Sign Up form views
 */
function toggleAuthMode(chosenMode) {
    appState.authSelectionMode = chosenMode;
    const nameSection = document.getElementById('name-group');
    const submitBtn = document.getElementById('auth-submit-btn');

    document.getElementById('tab-login').classList.remove('active-tab');
    document.getElementById('tab-signup').classList.remove('active-tab');

    if (chosenMode === 'signup') {
        document.getElementById('tab-signup').classList.add('active-tab');
        nameSection.style.display = 'block';
        submitBtn.innerText = 'Register Account';
    } else {
        document.getElementById('tab-login').classList.add('active-tab');
        nameSection.style.display = 'none';
        submitBtn.innerText = 'Sign In to Ema-Mart';
    }
}

/**
 * Processes authentication form submissions
 */
function handleAuthSubmit(event) {
    event.preventDefault();
    const userEmail = document.getElementById('auth-email').value.trim();

    if (!userEmail) {
        alert("VALIDATION ERROR: Please fill out all required authentication variables.");
        return;
    }

    appState.authenticatedUser = { email: userEmail };
    document.getElementById('auth-nav-item').innerHTML = `
        <div class="d-flex align-items-center bg-dark bg-opacity-25 py-1 px-3 rounded-pill">
            <span class="text-white small me-2"><i class="bi bi-person-fill text-accent me-1"></i>${userEmail.split('@')[0]}</span>
            <i class="bi bi-power text-danger ms-2" style="cursor:pointer;" onclick="window.location.reload()" title="Log Out"></i>
        </div>
    `;

    alert("SUCCESSFUL ACCESS: Account verified. Returning back to shopping grid.");
    showSection('storefront');
}

/**
 * Pushes items into the cart and increments values on identical targets
 */
function pushToCart(productId) {
    const targetCatalogItem = INVENTORY_CATALOG.find(p => p.id === productId);
    const trackingCartInstance = appState.shoppingCart.find(item => item.id === productId);

    if (trackingCartInstance) {
        trackingCartInstance.count += 1;
    } else {
        appState.shoppingCart.push({ ...targetCatalogItem, count: 1 });
    }

    refreshCartStateUI();
}

/**
 * Syncs math metrics with internal cart counter UI indicators
 */
function refreshCartStateUI() {
    const netCount = appState.shoppingCart.reduce((acc, obj) => acc + obj.count, 0);
    const numericBadge = document.getElementById('cart-badge');

    if (netCount > 0) {
        numericBadge.innerText = netCount;
        numericBadge.classList.remove('d-none');
    } else {
        numericBadge.classList.add('d-none');
    }

    generateCartViewMarkup();
}

/**
 * Computes array objects math models and prints listings to the cart container
 */
function generateCartViewMarkup() {
    const listbox = document.getElementById('cart-items-list-box');
    if (!listbox) return;

    if (appState.shoppingCart.length === 0) {
        listbox.innerHTML = `
            <div class="py-5 text-center text-muted">
                <i class="bi bi-bag-x display-4 text-accent mb-3"></i>
                <p class="fw-semibold">Your shopping container feels light.</p>
                <button class="btn btn-action btn-sm px-4 mt-2" onclick="showSection('storefront')">Discover Trending Deals</button>
            </div>
        `;
        document.getElementById('summary-subtotal').innerText = "KSh 0";
        document.getElementById('summary-total').innerText = "KSh 0";
        return;
    }

    let calculationTotalSum = 0;

    listbox.innerHTML = appState.shoppingCart.map(item => {
        const computedUnitPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price;
        const subtotalBlockCost = computedUnitPrice * item.count;
        calculationTotalSum += subtotalBlockCost;

        return `
            <div class="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                <div class="d-flex align-items-center">
                    <img src="${item.img}" class="rounded-3 me-3" style="width:60px; height:60px; object-fit:cover;">
                    <div>
                        <h6 class="fw-bold mb-0 text-dark small">${item.title}</h6>
                        <span class="text-muted small" style="font-size:0.75rem;">KSh ${computedUnitPrice.toLocaleString()}</span>
                    </div>
                </div>
                <div class="d-flex align-items-center">
                    <div class="input-group input-group-sm me-3" style="width: 100px;">
                        <button class="btn btn-outline-secondary" onclick="alterItemCount(${item.id}, -1)">-</button>
                        <span class="form-control text-center bg-light small">${item.count}</span>
                        <button class="btn btn-outline-secondary" onclick="alterItemCount(${item.id}, 1)">+</button>
                    </div>
                    <span class="fw-bold text-dark text-end" style="min-width:90px; font-size:0.85rem;">KSh ${subtotalBlockCost.toLocaleString()}</span>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('summary-subtotal').innerText = `KSh ${calculationTotalSum.toLocaleString()}`;
    document.getElementById('summary-total').innerText = `KSh ${calculationTotalSum.toLocaleString()}`;
}

/**
 * Modifies product item quantities inside the shopping container
 */
function alterItemCount(itemId, deltaValue) {
    const matchedInstance = appState.shoppingCart.find(item => item.id === itemId);
    if (!matchedInstance) return;

    matchedInstance.count += deltaValue;

    if (matchedInstance.count <= 0) {
        appState.shoppingCart = appState.shoppingCart.filter(item => item.id !== itemId);
    }

    refreshCartStateUI();
}

/**
 * Toggles structural telephone field requirements based on the payment selection
 */
function togglePaymentFields() {
    const selectedGate = document.getElementById('payment-method').value;
    const phoneInputBox = document.getElementById('phone-payment-group');
    const innerPhoneInput = document.getElementById('checkout-phone');

    if (selectedGate === 'card') {
        phoneInputBox.style.display = 'none';
        innerPhoneInput.removeAttribute('required');
    } else {
        phoneInputBox.style.display = 'block';
        innerPhoneInput.setAttribute('required', 'true');
    }
}

/**
 * Finalizes transactions with responsive modal alert messages
 */
function handleCheckoutSubmit(event) {
    event.preventDefault();

    if (appState.shoppingCart.length === 0) {
        alert("CRITICAL REJECTION: Cannot initialize transactions on zero-item array buckets.");
        return;
    }

    const assignedHub = document.getElementById('delivery-location').value;
    const methodGateway = document.getElementById('payment-method').value;

    if (!assignedHub) {
        alert("LOGISTICS FAULT: Please specify an operational delivery station point.");
        return;
    }

    if (methodGateway === 'mpesa' || methodGateway === 'airtel') {
        const phoneString = document.getElementById('checkout-phone').value.trim();
        if (phoneString.length !== 9 || isNaN(phoneString)) {
            alert("VALIDATION FAULT: Mobile carrier string parameters require exactly 9 digits.");
            return;
        }
        alert(`STK REQUEST DEPLOYED:\nA transaction secure invoice prompt has been pushed to +254${phoneString}. Authorize payment to clear delivery packaging from your selected ${assignedHub} hub sub-station.`);
    } else {
        alert(`SECURE GATEWAY STATUS APPROVED:\nCard allocation authorized successfully. Package dispatched to the regional ${assignedHub} hub.`);
    }

    // Reset shopping database memory parameters upon checkout completion cycle
    appState.shoppingCart = [];
    refreshCartStateUI();
    showSection('storefront');
}

/**
 * PERFORMANCE TIMER: Delays promotional ad activation tracking to match exactly 5.3 seconds.
 * 5.3 Seconds = 5300 Milliseconds calculation macro parameter.
 */
function initializeAdPortalTimer() {
    setTimeout(() => {
        const adModal = document.getElementById('promo-ad-modal');
        if (adModal) {
            adModal.classList.remove('d-none');
            void adModal.offsetWidth; // Forces design repaint cycle rendering for clean slide transition behavior
            adModal.classList.add('ad-active');
        }
    }, 5300);
}

function dismissAdPortal() {
    const adModal = document.getElementById('promo-ad-modal');
    if (adModal) {
        adModal.classList.remove('ad-active');
        setTimeout(() => adModal.classList.add('d-none'), 500);
    }
}

function executeAdRedirection() {
    dismissAdPortal();
    filterCatalogByGroup('Discounts', document.querySelector('[onclick*="Discounts"]'));
    showSection('storefront');
}
