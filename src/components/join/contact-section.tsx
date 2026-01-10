export function ContactSection() {
  return (
    <section className="mt-20">
      <h2 className="text-xl font-bold text-foreground text-center mb-6">문의하기</h2>
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Email</h3>
          <a 
            href="mailto:contact@earlydevclub.com"
            className="text-brand-primary hover:text-brand-primary-dark"
          >
            talown@naver.com
          </a>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">GitHub</h3>
          <a 
            href="https://github.com/early-developer-club"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:text-brand-primary-dark"
          >
            github.com/early-developer-club
          </a>
        </div>

        {/* <div>
          <h3 className="text-lg font-semibold text-black">Discord</h3>
          <a 
            href="https://discord.gg/your-discord-link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:text-brand-primary-dark"
          >
            Vibe Coding Club
          </a>
        </div> */}
      </div>
      
      <div className="mt-20 text-center">
        <div className="bg-muted rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-6">운영진 모집</h3>
          <p className="text-muted-foreground text-sm">
            분야 관계없이 AI를 활용한 다양한 활동을 진행해보고 싶거나, 
            <br />
            커뮤니티에 기여하고 싶은 분들의 참여를 기다립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
