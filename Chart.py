function init() {
    renderSlides();
    setupEventListeners();
    
    // 현재 슬라이드가 차트 슬라이드일 때만 차트 초기화
    if (currentSlideIndex === 6) { // 7번 슬라이드의 인덱스는 6
        initializeChart();
    }
}

// 슬라이드 변경 시에도 차트 초기화 확인
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
