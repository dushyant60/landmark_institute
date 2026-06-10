const results = [
  { rank: 'AIR 1',  name: 'Rahul Kumar',       college: 'NIT Trichy MCA' },
  { rank: 'AIR 3',  name: 'Priya Sharma',       college: 'NIT Warangal MCA' },
  { rank: 'AIR 7',  name: 'Amit Singh',         college: 'NIT Allahabad MCA' },
  { rank: 'AIR 12', name: 'Ayushi Choudhary',   college: 'IGDTUW' },
  { rank: 'AIR 15', name: 'Deepak Verma',       college: 'NIT Kurukshetra MCA' },
  { rank: 'AIR 21', name: 'Sneha Gupta',        college: 'NIT Bhopal MCA' },
  { rank: 'AIR 45', name: 'Manjeet Yadav',      college: 'NIT Trichy MCA' },
];

// Duplicate for seamless looping
const tickerItems = [...results, ...results];

export default function ResultsTicker() {
  return (
    <div className="results-section">
      <div className="ticker-wrap">
        {tickerItems.map((item, i) => (
          <div className="ticker-item" key={i}>
            <span className="ticker-rank">{item.rank}</span>
            <span className="ticker-name">{item.name}</span>
            <span className="ticker-dot"></span>
            <span className="ticker-college">{item.college}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
