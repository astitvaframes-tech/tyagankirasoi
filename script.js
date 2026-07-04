const phoneNumber = "917988552675";

const menuItems = [
  { name: "Dal Roti Thali", price: 149, category: "Thali", desc: "Dal with 4 tawa rotis, homestyle lentils, onion, chilli, and comfort meal flavour." },
  { name: "Ghar Ki Midnight Thali (Dal Roti)", price: 159, category: "Midnight", desc: "Simple, light, and comforting late-night thali with butter tawa rotis and dal." },
  { name: "Matar Paneer Thali", price: 239, category: "Thali", desc: "4 chapati with matar paneer, a rich homestyle paneer gravy meal." },
  { name: "4 Desi Ghee Chapati with Aloo Jeera", price: 179, category: "Thali", desc: "Tawa chapati served with jeera aloo, curd, and homestyle sides." },
  { name: "4 Poori and Aloo Ki Sabzi", price: 175, category: "Thali", desc: "Hot pooris with traditional aloo sabzi and classic Indian thali taste." },
  { name: "4 Tawa Chapati with 2 Sabji and Rice", price: 179, category: "Dinner", desc: "Complete dinner plate with 4 chapatis, 2 sabjis, and rice, subject to availability." },
  { name: "Tyagan Special Dinner Sabji and Rice", price: 179, category: "Dinner", desc: "Dinner combo with tawa chapati, sabji, rice, and ghar jaisa balance." },
  { name: "4 Tawa Chapati with 2 Sabji", price: 168, category: "Dinner", desc: "Fresh chapatis served with two available sabjis." },
  { name: "4 Tawa Chapati with 1 Sabji", price: 149, category: "Dinner", desc: "Simple daily meal with 4 tawa chapatis and one homestyle sabji." },
  { name: "Paratha", price: 95, category: "Paratha", desc: "Fresh tawa paratha served hot with homestyle sides." },
  { name: "1 Desi Ghee Tawa Aloo Paratha", price: 85, category: "Paratha", desc: "Whole-wheat aloo stuffed paratha roasted on tawa with desi ghee." },
  { name: "Desi Ghee Tawa Aloo Pyaaz Paratha", price: 89, category: "Paratha", desc: "Aloo and onion stuffed tawa paratha with desi ghee aroma." },
  { name: "Desi Ghee Tawa Paneer Paratha", price: 95, category: "Paratha", desc: "Paneer stuffed tawa paratha served with curd and pickle-style comfort." },
  { name: "Midnight Aloo Pyaaz Parantha", price: 95, category: "Midnight", desc: "Late-night aloo pyaaz parantha, thick and satisfying." },
  { name: "Midnight Paneer Parantha", price: 119, category: "Midnight", desc: "Paneer parantha made for heavier midnight cravings." },
  { name: "Midnight Aloo Pyaaz Cheese Parantha Thali", price: 229, category: "Midnight", desc: "Indulgent late-night thali with cheesy aloo pyaaz parantha." },
  { name: "Crunchy Butter Sizzler Toast (Bread Potato 4 Pieces)", price: 120, category: "Snacks", desc: "Crispy toasted bread with melted butter and potato filling." },
  { name: "Chatpata Mixed Veg Pakoda (10 Pieces) with Masala", price: 159, category: "Snacks", desc: "Signature spicy mixed vegetable pakoda, crisp outside and soft inside." },
  { name: "Healthy Veg Grill Sandwich", price: 145, category: "Snacks", desc: "Grilled vegetable sandwich with a balanced, filling taste." },
  { name: "Crispy Golden Bread Rolls (2 Classic Aloo Stuffed)", price: 149, category: "Snacks", desc: "Crunchy bread rolls filled with classic aloo stuffing and chutneys." },
  { name: "Aloo Tikki Burger", price: 79, category: "Snacks", desc: "Desi-western style burger with aloo tikki and fresh layers." },
  { name: "Aloo Tikki Cheese Burger", price: 89, category: "Snacks", desc: "Aloo tikki burger with a cheesy twist." },
  { name: "Cheese Maggi", price: 119, category: "Snacks", desc: "Creamy cheese Maggi noodles for quick comfort cravings." },
  { name: "Jeera Aloo", price: 117, category: "Vegetable", desc: "Fresh potatoes tossed with jeera and homestyle masala." },
  { name: "Aloo Matar", price: 99, category: "Vegetable", desc: "Aloo and green peas in a warm ghar-style curry." },
  { name: "Matar Paneer", price: 186, category: "Vegetable", desc: "Paneer and green peas cooked in a rich Indian gravy." },
  { name: "Tadkawali Dal", price: 99, category: "Vegetable", desc: "Lentils finished with a proper tadka tempering." },
  { name: "The Shahi Signature Shahi Paneer", price: 269, category: "Vegetable", desc: "Creamy shahi paneer with rich gravy and premium flavour." },
  { name: "Ghar Wali Meethi Lassi", price: 79, category: "Beverages", desc: "Thick, sweet, fresh lassi served chilled." },
  { name: "Tarbuj Ki Taazgi (Watermelon Juice)", price: 99, category: "Beverages", desc: "Natural watermelon juice with a refreshing finish." },
  { name: "Kuttu Poori and Chatpate Aloo", price: 199, category: "Vrat", desc: "Vrat meal with crispy kuttu pooris and tangy aloo." },
  { name: "Navratri Vrat Special Crispy Aloo Chaat", price: 129, category: "Vrat", desc: "Golden fried potatoes tossed in vrat-style masala." },
  { name: "Pavitra Upwas Meal", price: 149, category: "Vrat", desc: "Clean vrat-style meal with crisp buckwheat fritters and simple sides." }
];

const accents = ["#f7bd3b55", "#0f8b4d33", "#e43f2f33", "#b45f3438", "#1c8fbf2e"];

function whatsappLink(item) {
  const message = `Hi Tyagan Ki Rasoi, I want to order: ${item.name}${item.price ? ` (Rs ${item.price})` : ""}. Please share availability and total.`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

function renderCategories(items) {
  const tabs = document.querySelector("#categoryTabs");
  if (!tabs) return;
  const categories = ["All", ...new Set(items.map(item => item.category))];
  tabs.innerHTML = categories.map((category, index) => {
    const id = category === "All" ? "category-All" : `category-${category}`;
    return `<button id="${id}" class="${index === 0 ? "active" : ""}" data-category="${category}" type="button">${category}</button>`;
  }).join("");
}

function renderMenu() {
  const grid = document.querySelector("#foodGrid");
  const search = document.querySelector("#menuSearch");
  const count = document.querySelector("#menuCount");
  const activeTab = document.querySelector(".category-tabs button.active");
  if (!grid || !count) return;

  const query = (search?.value || "").trim().toLowerCase();
  const category = activeTab?.dataset.category || "All";
  const filtered = menuItems.filter(item => {
    const matchesCategory = category === "All" || item.category === category;
    const haystack = `${item.name} ${item.category} ${item.desc}`.toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  count.textContent = `${filtered.length} food item${filtered.length === 1 ? "" : "s"} shown`;
  grid.innerHTML = filtered.map((item, index) => `
    <article class="food-card reveal visible" style="--accent:${accents[index % accents.length]}">
      <div class="food-top">
        <div class="food-meta">
          <span class="pill">${item.category}</span>
          <span class="price">Rs ${item.price}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>
      <a class="btn" href="${whatsappLink(item)}" target="_blank" rel="noreferrer">Order Now</a>
    </article>
  `).join("");

  if (!filtered.length) {
    grid.innerHTML = `<article class="food-card reveal visible"><h3>No matching food found</h3><p>Try another search or choose All.</p></article>`;
  }
}

function setupMenuPage() {
  if (!document.querySelector("#foodGrid")) return;
  renderCategories(menuItems);
  renderMenu();
  document.querySelector("#menuSearch")?.addEventListener("input", renderMenu);
  document.querySelector("#categoryTabs")?.addEventListener("click", event => {
    const button = event.target.closest("button");
    if (!button) return;
    document.querySelectorAll(".category-tabs button").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");
    renderMenu();
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

setupReveal();
setupMenuPage();
