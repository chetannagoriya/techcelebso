import Image from "next/image";

const logoSlugs = {
  "OpenAI": "openai",
  "Python": "python",
  "TensorFlow": "tensorflow",
  "PyTorch": "pytorch",
  "OpenCV": "opencv",
  "NVIDIA": "nvidia",
  "ROS": "ros",
  "ROS 2": "ros",
  "AWS": "amazonwebservices",
  "Azure": "microsoftazure",
  "Google Cloud": "googlecloud",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "PostgreSQL": "postgresql",
  "MongoDB": "mongodb",
  "Redis": "redis",
  "Kafka": "apachekafka",
  "Spark": "apachespark",
  "Databricks": "databricks",
  "Snowflake": "snowflake",
  "Redshift": "amazonredshift",
  "BigQuery": "googlebigquery",
  "InfluxDB": "influxdb",
  "Grafana": "grafana",
  "Mapbox": "mapbox",
  "ArcGIS": "esri",
  "QGIS": "qgis",
  "Google Maps": "googlemaps",
  "Google Earth Engine": "googleearthengine",
  "Cesium": "cesium",
  "PostGIS": "postgresql",
  "Firebase": "firebase",
  "React": "react",
  "Next.js": "nextdotjs",
  "Flutter": "flutter",
  "Swift": "swift",
  "Kotlin": "kotlin",
  "Node.js": "nodedotjs",
  "GraphQL": "graphql",
  "Strapi": "strapi",
  "Unity": "unity",
  "SQL Server": "microsoftsqlserver",
  "AutoCAD": "autodesk",
  "YOLO": "ultralytics",
  "DeepStream": "nvidia",
  "Landsat": "nasa",
};

function TechnologyItem({ name }) {
  const slug = logoSlugs[name];

  return (
    <div className="tech-stack-marquee__item">
      {slug ? (
        <Image
          src={`/tech-logos/${slug}.svg`}
          alt=""
          width={34}
          height={34}
          loading="eager"
          unoptimized
          className="tech-stack-marquee__logo"
        />
      ) : (
        <span className="tech-stack-marquee__fallback" aria-hidden="true">{name.slice(0, 2)}</span>
      )}
      <span>{name}</span>
    </div>
  );
}

export default function TechStackMarquee({ technologies }) {
  const items = [...technologies, ...technologies];

  return (
    <div className="tech-stack-marquee" aria-label="Technologies we use">
      <div className="tech-stack-marquee__track">
        {items.map((name, index) => (
          <TechnologyItem key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  );
}
