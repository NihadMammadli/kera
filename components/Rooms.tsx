import { content, t, has } from '@/content';
import { asset } from '@/lib/paths';
import { RoomDrawing } from './RoomDrawing';
import { Title } from './Title';

/**
 * Each room is a drawing until the client names a photograph for it in the
 * workbook, at which point that room — and only that room — becomes a picture.
 * The building site converts itself, one room at a time.
 */
export function Rooms() {
  const rooms = content.rooms;
  if (!rooms.length) return null;

  return (
    <section className="section rooms" id="rooms" data-rooms>
      <div className="rooms__inner">
        <div className="rooms__head">
          <Title text={t('rooms.title')} />
          <p className="lead" data-split="lines">
            {t('rooms.lead')}
          </p>
          {has('rooms.note') && (
            <p className="note" data-reveal>
              {t('rooms.note')}
            </p>
          )}
        </div>

        <div className="rooms__viewport" data-rooms-viewport>
          <div className="rooms__track" data-rooms-track>
            {rooms.map((room, i) => {
              const webp = room.image.replace(/\.(jpe?g|png)$/i, '.webp');
              return (
                <article className="room" key={room.name} data-reveal>
                  <div className="room__plate">
                    {room.image ? (
                      <picture>
                        {webp !== room.image && (
                          <source srcSet={asset(`/img/${webp}`)} type="image/webp" />
                        )}
                        <img
                          className="room__photo"
                          src={asset(`/img/${room.image}`)}
                          alt={room.imageAlt}
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 900px) 74vw, 18vw"
                        />
                      </picture>
                    ) : (
                      <RoomDrawing kind={i % 5} className="room__draw" />
                    )}
                  </div>
                  <div>
                    <h3 className="room__name">{room.name}</h3>
                    <p className="room__text">{room.text}</p>
                    {room.meta && <p className="room__meta">{room.meta}</p>}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
