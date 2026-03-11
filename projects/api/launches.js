export default async function handler(req, res) {
  try {
    const r = await fetch('https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&mode=detail');
    if (!r.ok) {
      return res.status(502).json({ error: `Launch API returned ${r.status}` });
    }
    const json = await r.json();
    const launches = (json.results || [])
      .filter(l => l.pad && l.pad.latitude && l.pad.longitude)
      .map(l => {
        const orbit = l.mission?.orbit || {};
        return {
          name: l.name,
          net: l.net,
          status: l.status?.abbrev || 'TBD',
          provider: l.launch_service_provider?.name || 'Unknown',
          padName: l.pad.name,
          location: l.pad.location?.name || '',
          lat: parseFloat(l.pad.latitude),
          lng: parseFloat(l.pad.longitude),
          missionName: l.mission?.name || '',
          missionDesc: l.mission?.description || '',
          orbitName: orbit.name || '',
          orbitAbbrev: orbit.abbrev || '',
          rocketName: l.rocket?.configuration?.name || '',
          rocketFamily: l.rocket?.configuration?.family || '',
          imgUrl: l.image?.thumbnail_url || l.image?.image_url || '',
        };
      });

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=120');
    return res.status(200).json({ launches });
  } catch (e) {
    return res.status(502).json({ error: 'Failed to fetch launches: ' + e.message });
  }
}
