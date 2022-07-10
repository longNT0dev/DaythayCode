// Gọi API

// Các bước để tạo ra giao diện có dạng list

// 1. Tạo 1 thẻ mẫu bên html + copy xem thử giao diện

// 2. Chuẩn bị API (dữ liệu đã cho sẵn)

const POKEMONAPI = "https://pokeapi.co/api/v2/pokemon/";

const POKEMONNAME = [
  "accelgor",
  "amaura",
  "basculegion",
  "bellsprout",
  "blaziken",
  "landorus",
  "pupitar",
  "overqwil",
  "noivern",
];

const container = document.getElementById("container");

for (let i = 0; i < POKEMONNAME.length; i++) {
  const url = POKEMONAPI + POKEMONNAME[i];

  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      const abilityUrl = data.abilities[0].ability.url;
      const imageUrl = data.sprites.front_shiny

      fetch(abilityUrl)
        .then((result1) => result1.json())
        .then((ability) => {
          const effect = ability.effect_entries[1].effect;

          container.innerHTML += `
                <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src=${imageUrl} alt="Avatar" style="width:280px;height:280px;">
        </div>
        <div class="flip-card-back" style="color:black;padding: 0px 24px;">
          <div style="display:flex;justify-content: space-between;align-items: center;">
            <h3>${POKEMONNAME[i]}</h3>
            <div style="display:flex;align-items: center;">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbcULqMCE37rhdS9wA8EQXD4dWScYgINxtbA&usqp=CAU" width="30px" height="30px" style="border-radius:50%">
              <span>electric</span>
            </div>
          </div>
          <p>${effect}</p>
          <p></p>
        </div>
      </div>
    </div>
            `;
        });
    })
    .catch((error) => {});
}


// youth power : Năng lượng tuổi trẻ 
// Sức khỏe: Chế độ dinh dưỡng + Công thức nấu ăn healthy
// Khát vọng: Cho phép người ta đăng mong muốn, khát vọng 
// Tư tưởng: Chia sẻ tâm tư, tình cảm, tư vấn + Đọc sách - Những cuốn sách dạng 
// khơi gợi đam mê, khai phá bản thân   


// Về nhà 
// Suy nghĩ về đề tài + chọn ý tưởng để thực hiện trang web 
// Phác họa qua 1 số chức năng sẽ có 
// Hoàn thiện phần type cho thẻ pokemon 