// Change these names anytime. The first person is up first.
const MEMBERS = ["Sean", "Casey", "Jeremy", "Brian", "Bagley"];
const TIME_ZONE = "America/New_York";

// The Saturday the first name in MEMBERS is up. After 6:00 PM ET that day,
// it rolls to the next name, then once a week after that.
const ROTATION_START = { year: 2026, month: 9, day: 12 };

const WEEKDAY_NUMBER = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const currentPickerEl = document.getElementById("current-picker");
const rotationListEl = document.getElementById("rotation-list");
const countdownTargetEl = document.getElementById("countdown-target");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function twoDigits(value) {
  return String(value).padStart(2, "0");
}

function getDatePartsInZone(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const map = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      map[part.type] = part.value;
    }
  }

  return {
    year: Number(map.year),
    month: Number(map.month),
    day: Number(map.day),
    weekday: map.weekday,
    hour: Number(map.hour),
    minute: Number(map.minute),
    second: Number(map.second),
  };
}

function zonedDateToUtc(year, month, day, hour, minute, second, timeZone) {
  let utc = Date.UTC(year, month - 1, day, hour, minute, second);

  for (let i = 0; i < 3; i += 1) {
    const parts = getDatePartsInZone(new Date(utc), timeZone);
    const shownAsUtc = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );
    const wantedAsUtc = Date.UTC(year, month - 1, day, hour, minute, second);
    utc += wantedAsUtc - shownAsUtc;
  }

  return new Date(utc);
}

function addCalendarDays(year, month, day, extraDays) {
  const date = new Date(Date.UTC(year, month - 1, day + extraDays));
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

function getUpcomingSaturday(fromDate, hour, minute) {
  const nowParts = getDatePartsInZone(fromDate, TIME_ZONE);
  const weekdayNumber = WEEKDAY_NUMBER[nowParts.weekday];
  let daysUntilSaturday = (6 - weekdayNumber + 7) % 7;
  const todayAtTime = zonedDateToUtc(
    nowParts.year,
    nowParts.month,
    nowParts.day,
    hour,
    minute,
    0,
    TIME_ZONE
  );

  if (daysUntilSaturday === 0 && fromDate >= todayAtTime) {
    daysUntilSaturday = 7;
  }

  return addCalendarDays(
    nowParts.year,
    nowParts.month,
    nowParts.day,
    daysUntilSaturday
  );
}

function getNextSaturdayAt530Et(fromDate = new Date()) {
  const targetDay = getUpcomingSaturday(fromDate, 17, 30);
  return zonedDateToUtc(
    targetDay.year,
    targetDay.month,
    targetDay.day,
    17,
    30,
    0,
    TIME_ZONE
  );
}

function getCurrentIndex(fromDate = new Date()) {
  const activeSaturday = getUpcomingSaturday(fromDate, 18, 0);
  const startUtc = Date.UTC(
    ROTATION_START.year,
    ROTATION_START.month - 1,
    ROTATION_START.day
  );
  const activeUtc = Date.UTC(
    activeSaturday.year,
    activeSaturday.month - 1,
    activeSaturday.day
  );
  const weeks = Math.round((activeUtc - startUtc) / (7 * 24 * 60 * 60 * 1000));
  return ((weeks % MEMBERS.length) + MEMBERS.length) % MEMBERS.length;
}

function formatMeetingTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date);
}

function addBadge(item, text, extraClass) {
  const badge = document.createElement("span");
  badge.className = extraClass ? `badge ${extraClass}` : "badge";
  badge.textContent = text;
  item.append(badge);
}

function renderRotation(index) {
  const nextIndex = (index + 1) % MEMBERS.length;
  currentPickerEl.textContent = MEMBERS[index];
  rotationListEl.innerHTML = "";

  MEMBERS.forEach((name, memberIndex) => {
    const item = document.createElement("li");
    if (memberIndex === index) {
      item.classList.add("current");
    } else if (memberIndex === nextIndex) {
      item.classList.add("upcoming");
    }

    const order = document.createElement("span");
    order.className = "person-index";
    order.textContent = String(memberIndex + 1).padStart(2, "0");

    const person = document.createElement("span");
    person.className = "person-name";
    person.textContent = name;

    item.append(order, person);

    if (memberIndex === index) {
      addBadge(item, "This Saturday");
    } else if (memberIndex === nextIndex) {
      addBadge(item, "Next Saturday", "next");
    }

    rotationListEl.append(item);
  });
}

function updateCountdown() {
  const target = getNextSaturdayAt530Et();
  const remaining = Math.max(0, target.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = twoDigits(days);
  hoursEl.textContent = twoDigits(hours);
  minutesEl.textContent = twoDigits(minutes);
  secondsEl.textContent = twoDigits(seconds);
  countdownTargetEl.textContent = formatMeetingTime(target);
}

let displayedIndex = null;

function tick() {
  const index = getCurrentIndex();
  if (index !== displayedIndex) {
    displayedIndex = index;
    renderRotation(index);
  }
  updateCountdown();
}

function formatHistoryDate(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}

function historyTitle(entry) {
  const artist = entry.artist.trim();
  const album = entry.album.trim();

  if (artist && album) {
    return `${artist} – ${album}`;
  }

  return artist || album || "No pick";
}

function renderHistory() {
  const historyListEl = document.getElementById("history-list");
  if (!historyListEl || typeof albumHistory === "undefined") {
    return;
  }

  const entries = [...albumHistory].sort((a, b) => b.date.localeCompare(a.date));
  historyListEl.innerHTML = "";

  entries.forEach((entry) => {
    const item = document.createElement("article");
    item.className = "history-item";

    const cover = document.createElement("div");
    cover.className = "history-cover";

    if (entry.coverUrl) {
      const img = document.createElement("img");
      img.src = entry.coverUrl;
      img.alt = historyTitle(entry);
      cover.append(img);
    } else {
      cover.setAttribute("aria-hidden", "true");
    }

    const body = document.createElement("div");
    body.className = "history-body";

    const dateEl = document.createElement("p");
    dateEl.className = "history-date";
    dateEl.textContent = formatHistoryDate(entry.date);

    const titleEl = document.createElement("p");
    titleEl.className = "history-title";
    titleEl.textContent = historyTitle(entry);

    body.append(dateEl, titleEl);

    if (entry.person) {
      const personEl = document.createElement("p");
      personEl.className = "history-person";
      personEl.textContent = entry.person;
      body.append(personEl);
    }

    if (entry.notes) {
      const notesEl = document.createElement("p");
      notesEl.className = "history-notes";
      notesEl.textContent = entry.notes;
      body.append(notesEl);
    }

    const writeupEl = document.createElement("p");
    writeupEl.className = "history-writeup";
    if (entry.writeup) {
      writeupEl.classList.add("has-text");
      writeupEl.innerHTML = entry.writeup.replace(/\n/g, "<br>").replace(/\\n/g, "<br>");
    }

    item.append(cover, body, writeupEl);
    historyListEl.append(item);
  });
}

tick();
renderHistory();
setInterval(tick, 1000);
