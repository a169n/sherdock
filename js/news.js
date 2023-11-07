document.addEventListener('DOMContentLoaded', function () {
     const newsData = [{
               title: "Medical Breakthrough",
               date: "2023-10-15",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "New Clinic Opens",
               date: "2023-11-05",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Healthcare News",
               date: "2023-11-20",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Cutting-Edge Medical Research",
               date: "2023-11-25",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Clinic Expansion Announcement",
               date: "2023-12-10",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Health Tips for a Better Life",
               date: "2023-12-15",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "New Vaccination Campaign",
               date: "2024-01-05",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Healthcare Professionals Seminar",
               date: "2024-02-20",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Latest Developments in Telemedicine",
               date: "2024-03-10",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Groundbreaking Cancer Research",
               date: "2024-03-25",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "New Clinic Opening Ceremony",
               date: "2024-04-05",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Mental Health Awareness Week",
               date: "2024-05-10",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Healthy Eating Habits",
               date: "2024-06-20",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "Latest Advancements in Surgery",
               date: "2024-07-15",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          },
          {
               title: "World Health Day Celebration",
               date: "2024-08-10",
               content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          }
     ];

     const newsList = document.querySelector('.news-list');
     const startDateFilter = document.getElementById('start-date-filter');
     const endDateFilter = document.getElementById('end-date-filter');
     const filterButton = document.getElementById('filter-news');

     const showAllNewsButton = document.getElementById('show-all-news');
     const allNewsList = document.getElementById('all-news-list');
     const currentDateValue = document.getElementById('current-date-value');

     filterButton.addEventListener('click', filterNews);
     showAllNewsButton.addEventListener('click', showAllNews);

     function filterNews() {
          const startDate = new Date(startDateFilter.value);
          const endDate = new Date(endDateFilter.value);

          const filteredNews = newsData.filter(newsItem => {
               const newsDate = new Date(newsItem.date);
               return newsDate >= startDate && newsDate <= endDate;
          });

          allNewsList.style.display = 'none';
          showAllNewsButton.style.display = 'block';

          displayNews(filteredNews);
     }


     function displayNews(newsItems) {
          newsList.innerHTML = '';

          if (newsItems.length === 0) {
               newsList.innerHTML = '<p>No news found for the selected date range.</p>';
          } else {
               newsItems.forEach(newsItem => {
                    const newsCard = document.createElement('div');
                    newsCard.classList.add('news-card');

                    const newsTitle = document.createElement('h2');
                    newsTitle.textContent = newsItem.title;

                    const newsContent = document.createElement('p');
                    newsContent.textContent = newsItem.content;

                    newsCard.appendChild(newsTitle);
                    newsCard.appendChild(newsContent);
                    newsList.appendChild(newsCard);
               });
          }
     }

     function showAllNews() {
          allNewsList.style.display = 'block';
          showAllNewsButton.style.display = 'none';

          const allNewsItems = newsData.map(newsItem => {
               return `${newsItem.date}: ${newsItem.title}`;
          });

          const allNewsListItems = allNewsItems.map(news => {
               const listItem = document.createElement('li');
               listItem.textContent = news;
               return listItem;
          });

          const ul = document.querySelector('#all-news-list ul');
          allNewsListItems.forEach(listItem => ul.appendChild(listItem));
     }

     const today = new Date();
     const currentDate = today.toISOString().split('T')[0];
     currentDateValue.textContent = currentDate;

});