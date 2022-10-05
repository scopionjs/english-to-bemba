let plurals = ["bad", "good"];
let bemba_words = {
  you: "iwe",
  and: "pamo na",
  me: "ine",
  we: "twa",
  us: "ifwe",
  are: "fi",
  is: "ni",
  if: "nga chakweba ati",
  these: "ifi",
  this: "ici",
  that: "ico",
  bad: "te cisuma",
  good: "cisuma",
  bad_plural: "te fisuma",
  good_plural: "fisuma",
  person: "umuntu",
  people: "abantu",
  boy: "umwaume",
  girl: "umwanakashi",
  with: "na",
  boys: "abaume",
  girls: "abanakashi",
  father: "ba tata",
  mother: "ba mayo",
  baby: "akanya",
  its: "chaba",
  were: "uko",
  where: "nikwisa",
  here: "pano",
  maybe: "limbi",
  their: "fyabo",
  unless: "kano",
  because: "pantu",
  come: "isa",
  they: "ba",
  have: "kwata",
  woman: "namayo",
  man: "shitata",
  women: "ba namayo",
  men: "ba shitata",
  yes: "chacine",
  no: "nakalya iyo",
  but: "lelo",
  while: "elyo",
  their: "fyabo",
  in: "mu",
  start: "tampa",
  stop: "leka",
  continue: "konkanya",
  about: "pa",
  think: "tontonkanya",
  to: "uku",
};
let translate = () => {
  Array.from(document.querySelectorAll("p")).forEach((item, index) => {
    let temp_str = "";
    if (item.innerText.split(" ")[0].length !== 0) {
      item.innerText.split(" ").forEach((word, ind) => {
        if (word == "are") {
          if (plurals.includes(item.innerText.split(" ")[ind + 1])) {
            temp_str += ` ${
              bemba_words[`${item.innerText.split(" ")[ind + 1]}_plural`] ==
              undefined
                ? word
                : bemba_words[`${item.innerText.split(" ")[ind + 1]}_plural`]
            }`;
            item.innerText = temp_str;
          } else {
            temp_str += ` ${
              bemba_words[word] == undefined ? word : bemba_words[word]
            }`;
            item.innerText = temp_str;
          }
        } else if (plurals.includes(word)) {
          if (item.innerText.split(" ")[ind--] == "are") {
            temp_str += "";
            item.innerText = temp_str;
          } else {
            temp_str += ` ${
              bemba_words[word] == undefined ? word : bemba_words[word]
            }`;
            item.innerText = temp_str;
          }
        } else {
          temp_str += ` ${
            bemba_words[word] == undefined ? word : bemba_words[word]
          }`;
        }
        if (ind == item.innerText.split(" ").length - 1) {
          item.innerText = temp_str;
          //done
        }
      });
    }
  });
};
document.querySelector("button").onclick = translate;
