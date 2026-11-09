const grades = [
  { name: 'Макар', score: 85 },
  { name: 'Денис', score: 92 },
  { name: 'Анна', score: 78 },
  { name: 'Даша', score: 88 },
  { name: 'Студент_X', score: 45 }
];

function calculateAverage(data) {
  if (data.length === 0) {
    return null;
  }

  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].score;
  }
  return total / data.length;
}

function findTopStudent(data) {
  if (data.length === 0) {
    return null;
  }

  let best = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].score > best.score) {
      best = data[i];
    }
  }
  return best.name;
}

function filterFailed(data, passScore) {
  const names = [];
  for (const student of data) {
    if (student.score < passScore) {
      names.push(student.name);
    }
  }
  return names;
}

function addLetterGrade(data) {
  const result = [];
  for (const student of data) {
    let letter = 'C';
    if (student.score >= 90) {
      letter = 'A';
    } else if (student.score >= 75) {
      letter = 'B';
    }

    result.push({
      name: student.name,
      score: student.score,
      letter: letter
    });
  }
  return result;
}

console.log('Средний балл:', calculateAverage(grades));
console.log('Лучший студент:', findTopStudent(grades));
console.log('Должники:', filterFailed(grades, 60));
console.log('Итоговый массив:', addLetterGrade(grades));
