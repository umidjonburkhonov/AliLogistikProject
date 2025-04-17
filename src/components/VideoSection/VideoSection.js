import React from 'react';
// import VideoModal from '../ModalVideo/VideoModal';

const VideoSection = () => {
    return (
        <section className="wpo-video-section">
            <div className="container">
                <div className="wpo-video-item">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="video-text-wrap">
                                <div className="wpo-viedo-text">
                                    <h2>Наша компания предлагает услуги быстрой доставки.</h2>
                                    <p> Мы понимаем, насколько важно своевременно получать и отправлять грузы, поэтому разработали специальные предложения для экспресс-доставки. Независимо от расстояния и сложности маршрута, мы гарантируем минимальные сроки доставки без ущерба для безопасности и качества

                                        Наши логисты тщательно планируют каждый этап транспортировки, используя оптимальные маршруты и современные технологии отслеживания, чтобы ваш груз был доставлен точно в срок.

                                        Наши логисты тщательно планируют каждый этап транспортировки, используя оптимальные маршруты и современные технологии отслеживания, чтобы ваш груз был доставлен точно в срок.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-md-4 col-12">
                            <div className="wpo-video-icon">
                                <VideoModal />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;