export default async function handler(req, res) {
  try {
    const response = await fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=20&mode=detail");
    if (!response.ok) {
      return res.status(502).json({ error: `Launch API returned ${response.status}` });
    }

    const payload = await response.json();
    const launches = (payload.results || [])
      .filter((launch) => launch.pad?.latitude && launch.pad?.longitude)
      .map((launch) => {
        const orbit = launch.mission?.orbit || {};
        return {
          imgUrl: launch.image?.thumbnail_url || launch.image?.image_url || "",
          lat: Number.parseFloat(launch.pad.latitude),
          lng: Number.parseFloat(launch.pad.longitude),
          location: launch.pad.location?.name || "",
          missionDesc: launch.mission?.description || "",
          missionName: launch.mission?.name || "",
          name: launch.name,
          net: launch.net,
          orbitAbbrev: orbit.abbrev || "",
          orbitName: orbit.name || "",
          padName: launch.pad.name,
          provider: launch.launch_service_provider?.name || "Unknown",
          rocketFamily: launch.rocket?.configuration?.family || "",
          rocketName: launch.rocket?.configuration?.name || "",
          status: launch.status?.abbrev || "TBD",
        };
      });

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=120");
    return res.status(200).json({ launches });
  } catch (error) {
    return res.status(502).json({ error: `Failed to fetch launches: ${error.message}` });
  }
}
