document.addEventListener('DOMContentLoaded', () => {
  const articleForm = document.getElementById('articleForm');
  const articleList = document.getElementById('articleList');

  articleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('articleTitle').value;
    const content = document.getElementById('articleContent').value;
    const li = document.createElement('li');
    li.textContent = `${title}: ${content}`;
    articleList.appendChild(li);
    articleForm.reset();
  });

  const fatwaForm = document.getElementById('fatwaForm');
  const fatwaList = document.getElementById('fatwaList');

  fatwaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = document.getElementById('fatwaQuestion').value;
    const answer = document.getElementById('fatwaAnswer').value;
    const li = document.createElement('li');
    li.textContent = `السؤال: ${question} - الإجابة: ${answer}`;
    fatwaList.appendChild(li);
    fatwaForm.reset();
  });

  const galleryForm = document.getElementById('galleryForm');
  const galleryList = document.getElementById('galleryList');

  galleryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const imageUrl = document.getElementById('imageUrl').value;
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'صورة من المعرض';
    img.style.width = '100px';
    li.appendChild(img);
    galleryList.appendChild(li);
    galleryForm.reset();
  });
});
