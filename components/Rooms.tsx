import { site } from '@/content/site';
import { RoomDrawing } from './RoomDrawing';
import { Title } from './Title';

export function Rooms() {
  const r = site.rooms;
  return (
    <section className="section rooms" id="rooms" data-rooms>
      <div className="rooms__inner">
        <div className="rooms__head">
          <Title parts={r.title} />
          <p className="lead" data-split="lines">
            {r.lead}
          </p>
          <p className="note" data-reveal>
            {r.note}
          </p>
        </div>

        <div className="rooms__viewport" data-rooms-viewport>
          <div className="rooms__track" data-rooms-track>
            {r.items.map((room, i) => (
              <article className="room" key={room.name} data-reveal>
                <div className="room__plate">
                  <RoomDrawing kind={i} className="room__draw" />
                </div>
                <div>
                  <h3 className="room__name">{room.name}</h3>
                  <p className="room__text">{room.text}</p>
                  <p className="room__meta">{room.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
