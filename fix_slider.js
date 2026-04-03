const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'specific', 'home', 'IndustriesPreviewSection.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix overlapping (Tabs container padding)
content = content.replace(
  /className="flex flex-nowrap gap-2\.5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory lg:max-w-\[820px\] lg:justify-center lg:pb-0"/,
  'className="flex flex-nowrap gap-2.5 overflow-x-auto px-12 pb-4 no-scrollbar snap-x snap-mandatory lg:max-w-[820px] lg:justify-center lg:pb-0"'
);

// 2. Replace scrollIntoView in useEffect
const newEffect = `  useEffect(() => {
    if (industriesContainerRef.current) {
      const container = industriesContainerRef.current
      const activeCard = container.querySelector(\`[data-industry-id="\${activeIndustry}"]\`)
      if (activeCard) {
        animate(container.scrollLeft, activeCard.offsetLeft, {
          duration: 0.6,
          ease: 'easeInOut',
          onUpdate: (latest) => {
            container.scrollLeft = latest
          },
        })
      }
    }

    if (tabsContainerRef.current) {
      const container = tabsContainerRef.current
      const activeTab = container.querySelector('.is-active')
      if (activeTab) {
        const targetScrollLeft = activeTab.offsetLeft - container.offsetWidth / 2 + activeTab.offsetWidth / 2
        animate(container.scrollLeft, targetScrollLeft, {
          duration: 0.6,
          ease: 'easeInOut',
          onUpdate: (latest) => {
            container.scrollLeft = latest
          },
        })
      }
    }
  }, [activeIndustry])`;

content = content.replace(/useEffect\(\(\) => \{[\s\S]*?\}, \[activeIndustry\]\)/, newEffect);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated IndustriesPreviewSection.jsx');
