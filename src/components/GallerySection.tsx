import fs from "fs";
import path from "path";
import GalleryScroller from "@/components/GalleryScroller";

const GALLERY_DIR = path.join(process.cwd(), "public/event-images/gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function getGalleryPhotos() {
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .reverse()
    .map((file) => `/event-images/gallery/${file}`);
}

export default function GallerySection() {
  const photos = getGalleryPhotos();

  return (
    <section id="gallery" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#FF6B35]">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
            Moments from{" "}
            <span className="text-[#FF6B35]">earlier events.</span>
          </h2>
        </div>
      </div>

      <GalleryScroller photos={photos} />
    </section>
  );
}
