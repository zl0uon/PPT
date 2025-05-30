const slides = [
    {
        id:'slide-1',
        title: '조선시대 사람들은 어떻게 살았을까2를 읽고',
        content: `
        <div class="slide-content">
            <h1 class="slide-title">조선에서의 군사학</h1>
            <h2 class="slide-subtitle">조선시대 사람들은 어떻게 살았을까2</h2>
            <h3 class="slide-text">2516 유지영</h3>
        </div>
        `
    },

      {
        id: 'slide-2',
        title: '목차',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">목차</h1>
                <ul class="slide-list">
                    <li>조선시대 사람들은 어떻게 살았을까2를 읽고</li>
                    <li>오늘의 군사학 특징</li>
                    <li>조선시대와 오늘날을 비교</li>
                    <li>미래의 군사학은?</li>
                    <li>사이버 전쟁의 추후 데이터</li>
                    <li>마무리</li>
                </ul>
            </div>
        `
    },
    {
        id: 'slide-3',
        title: '조선시대 사람들은 어떻게 살았을까2를 읽고',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">조선시대 사람들은 어떻게 살았을까2를 읽고</h1>
                <h2 class="slide-subtitle">내용 정리</h2>
                <p class="slide-text">초반: 각자가 무기 없이 칼을 든 왜놈과 전쟁을 하였다 -> 결과 참패
                                      중반: 무기와 군사 체계를 정비함 -> 총 제작 및 포수, 사수, 살수라는 3수병으로 편제
                                      후반: 여진족과의 싸움에서 적의 세력이 커지면 정벌을 통해 압도하는 방식을 택함   </p>
                <p class="slide-text">추가 설명이나 예시를 포함할 수 있습니다.</p>
                <ul class="slide-list">
                    <li>키워드 1: 훈련도감 (임진왜란을 극복하며 만들어진 새로운 중앙 군영) </li>
                    <li>키워드 2: 3수병 (포수, 사수, 살수)</li>
                    <li>키워드 3: 초기 조선군은 고려군의 체계를 그대로 계승</li>
                </ul>
            </div>
        `
    },
    {
        id: 'slide-4',
        title: '오늘날의 군사학 특징',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">오늘날의 군사학 특징</h1>
                <h2 class="slide-subtitle">한국의 군사 체제</h2>
                <p class="slide-text">오늘날의 군사학에서는 각종 무기들이 개발되고 있다. 예를 들어 첨단 무기, 미사일 방어, 무인 전력 무기, 사이버 공격전, 해양/우주 관련 무기 등이 개발되고 있다. 이 중 우리가 주목해야할 점은 사이버전이다. 현대 기술이 발달함에 따라 사이버 전쟁이 많이 발생하고 있는데 우리는 이 부분을 주의깊게 보아야한다.</p>
                <ul class="slide-list">
                    <li>사이버 사령부 운용</li>
                    <li>AI 기반 사이버 방어 시스템 구축</li>
                    <li>전파 방해, 통신 교란 기술 발전</li>
                </ul>
            </div>
        `
    },
    {
        id: 'slide-5',
        title: '조선시대와 오늘날 무기를 비교',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">조선시대와 오늘날 무기를 비교</h1>
                <div style="display: flex; justify-content: space-between;">
                    <div style="width: 48%;">
                        <h2 class="slide-subtitle">조선시대 무기</h2>
                        <p class="slide-text">조선시대는 인력 중심 + 화약의 기초적 활용 및 성곽 방어와 제한된 해상 전투에만 의존하였다.</p>
                        <ul class="slide-list">
                            <li>주력 무기: 활,창,화살,검,활강총,화차</li>
                            <li>화포 무기: 총통, 화차</li>
                            <li>정보 통신 수단: 봉수제, 파발제</li>
                        </ul>
                    </div>
                    <div style="width: 48%;">
                        <h2 class="slide-subtitle">오늘날 무기</h2>
                        <p class="slide-text">오늘날은 기술 중심 + 정밀 무기체계를 지니고 있으며 미사일, 전자전, 사이버 AI에 기반한 첨단 복합 전력구조를 갖추고 있다.</p>
                        <div class="slide-image-placeholder" style="height: 150px; background-color: #eee; display: flex; justify-content: center; align-items: center;">
                        <ul class="slide-list">
                            <li>주력 무기: 전차, 자주포, 미사일, 전투기</li>
                            <li>화포 무기: 자주포, 천무, 패트리어트 미사일</li>
                            <li>정보 통신 수단: 위성 정찰, 무인기, 사이버전, AI 작전 통제</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 'slide-6',
        title: '미래의 군사학은?',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">미래의 군사학은?</h1>
                <h2 class="slide-subtitle">사이버전 관점의 미래 군사학 변화 양상</h2>
                <p class="slide-text">물리적 전투에서 정보전 중심으로 전환</p>
                        <ul class="slide-list">
                            <li>과거: 병력과 무기 수가 전쟁의 승패를 좌우한다.</li>
                            <li>미래 핵심: 정보 탈취, 시스템 마비, 데이터 조작</li>
                            <li>미래: 적의 지휘 체계를 무력화하고 민간 사회 기반시설을 마비시켜 전쟁 능력을 상실시킨다.</li>
                        </ul>
                <p class="slide-text">사이버 무기의 발달</p>
                        <ul class="slide-list">
                            <li>사이버 무기 특징 1: 사이버 무기는 흔적이 거의 없고 발사국 추적이 어렵다.</li>
                            <li>사이버 무기 특징 2: 실시간 대응이 어려우며, 민간 피해가 크다</li>
                            <li>공격 방식 예: APT 공격, 랜섬웨어, 디도스</li>
                        </ul>
                <p class="slide-text">군사 작전 개념의 변화</p>
                        <ul class="slide-list">
                            <li>개념 1: 사이버 우세권 확보가 전투 승리의 조건이다</li>
                            <li>개념 2: AI가 사이버 공격/방어를 자동화하여 기술이 발달된다.</li>
                            <li>개념 3: 디지털 전장을 지휘하는 지휘관의 역할이 필요해진다.</li>
                        </ul>
            </div>
        `
    },
    {
        id: 'slide-7',
        title: '사이버 전쟁의 추후 데이터',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">국가별 하이브리드 전쟁 우세 예측 그래프</h1>
                <div style="height: 400px; margin: 20px 0;">
                    <canvas id="hybridWarChart" width="600" height="400"></canvas>
                </div>
                <p class="slide-text">2050년 주요국 하이브리드 전쟁 역량 비교</p>
            </div>
        `
    },
    {
        id: 'slide-8',
        title: '마무리',
        content: `
            <div class="slide-content">
                <h1 class="slide-title">마무리 및 소감</h1>
                <p class="slide-text">군사학과 관련한 조사를 마무리하며</p>
                <ul class="slide-list">
                    <li>다들 사이버 전쟁이 얼마나 큰 피해를 끼칠까?라는 생각을 해본 적 있을 것이다. 나 또한 마찬가지이다. 항상 사이버 보안과 관련한 공부를 하다보니 군사 보안에 대해 관심이 생겼고 사이버 전쟁은 어떻게 일어나는 것이며 어느 나라가 유리한지 궁금하였었는데 이번 기회를 통해 하이브리드 전쟁의 개념을 알게되었다. 또한 자바스크립트로 ppt 및 예측 그래프를 코드로 구현한 것이 프로그래밍이라는 하나의 학문 지식을 발전시킨 것 같다.</li>
                </ul>
                <p class="slide-text" style="margin-top: 30px;">감사합니다!</p>
                
            </div>
        `
    }
];

// 전역 변수
let currentSlideIndex = 0;
const slideContainer = document.getElementById('slide-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const slideCounter = document.getElementById('slide-counter');

// 슬라이드 렌더링 함수
function renderSlides() {
    // 이 부분을 수정: 기존 내용을 초기화
    slideContainer.innerHTML = '';
    
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = `slide ${index === currentSlideIndex ? 'active' : ''}`;
        slideElement.id = slide.id;
        slideElement.innerHTML = slide.content;
        slideContainer.appendChild(slideElement);
    });
    
    updateSlideCounter();
}

// 슬라이드 카운터 업데이트
function updateSlideCounter() {
    slideCounter.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
}

// 이전 슬라이드로 이동
function goToPrevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateActiveSlide();
    }
}

// 다음 슬라이드로 이동
function goToNextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateActiveSlide();
    }
}

// 활성 슬라이드 업데이트
function updateActiveSlide() {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.classList.add('active');
            // 차트 슬라이드로 이동했을 때 차트 초기화
            if (index === 6) {
                setTimeout(initializeChart, 100); // 슬라이드 전환 후 약간의 지연을 두고 차트 초기화
            }
        } else {
            slide.classList.remove('active');
        }
    });
    
    updateSlideCounter();
}

// 키보드 이벤트 처리
function handleKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft') {
        goToPrevSlide();
    } else if (event.key === 'ArrowRight') {
        goToNextSlide();
    }
}

// 이벤트 리스너 등록
function setupEventListeners() {
    prevBtn.addEventListener('click', goToPrevSlide);
    nextBtn.addEventListener('click', goToNextSlide);
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // 터치 이벤트 지원 (모바일 대응)
    let touchStartX = 0;
    let touchEndX = 0;
    
    slideContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slideContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // 왼쪽으로 스와이프 (다음 슬라이드)
            goToNextSlide();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // 오른쪽으로 스와이프 (이전 슬라이드)
            goToPrevSlide();
        }
    }
}

// 차트 초기화 함수
function initializeChart() {
    const chartCanvas = document.getElementById('hybridWarChart');
    if (!chartCanvas) return;
    
    // 이미 차트가 있으면 파괴
    if (window.hybridWarChartInstance) {
        window.hybridWarChartInstance.destroy();
    }
    
    // 차트 데이터
    const data = {
        labels: ['전통적 군사력', '첨단 군사 기술', '사이버전 역량', '우주 영역 군사력', '정보전/심리전', '경제적 회복력', '동맹 관계', '사회적 회복력'],
        datasets: [
            {
                label: '미국',
                data: [9.0, 9.5, 8.5, 9.5, 8.0, 8.0, 8.5, 7.5],
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                fill: true
            },
            {
                label: '중국',
                data: [8.5, 9.0, 9.0, 8.5, 8.5, 9.0, 7.0, 7.0],
                borderColor: 'rgba(255, 153, 0, 1)',
                backgroundColor: 'rgba(255, 153, 0, 0.1)',
                fill: true
            },
            {
                label: '러시아',
                data: [8.0, 7.5, 9.0, 7.5, 9.0, 6.0, 6.5, 6.0],
                borderColor: 'rgba(40, 167, 69, 1)',
                backgroundColor: 'rgba(40, 167, 69, 0.1)',
                fill: true
            },
            {
                label: '인도',
                data: [7.5, 7.0, 7.5, 7.0, 7.0, 8.0, 7.5, 8.0],
                borderColor: 'rgba(220, 53, 69, 1)',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                fill: true
            }
        ]
    };
    
    // 차트 옵션
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    stepSize: 2
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: '2050년 하이브리드 전쟁 국가별 우세 영역'
            }
        }
    };
    
    // 레이더 차트 생성
    window.hybridWarChartInstance = new Chart(chartCanvas, {
        type: 'radar',
        data: data,
        options: options
    });
}

// 초기화 함수
function init() {
    renderSlides();
    setupEventListeners();
    
    // 현재 슬라이드가 차트 슬라이드일 때만 차트 초기화
    if (currentSlideIndex === 6) { // 7번 슬라이드의 인덱스는 6
        setTimeout(initializeChart, 100);
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);

// 슬라이드 직접 이동 함수 (외부에서 호출 가능)
function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlideIndex = index;
        updateActiveSlide();
    }
}

// 슬라이드 콘텐츠 동적 업데이트 함수 (외부에서 호출 가능)
function updateSlideContent(index, newContent) {
    if (index >= 0 && index < slides.length) {
        slides[index].content = newContent;
        renderSlides();
    }
}

// 슬라이드 추가 함수 (외부에서 호출 가능)
function addSlide(slideData) {
    slides.push(slideData);
    renderSlides();
}

// 슬라이드 제거 함수 (외부에서 호출 가능)
function removeSlide(index) {
    if (index >= 0 && index < slides.length) {
        slides.splice(index, 1);
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = slides.length - 1;
        }
        renderSlides();
    }
}
