import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  faqs = [
    {
      question: 'O que é Netflix?',
      answer: `A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, 
               filmes e documentários premiados em milhares de aparelhos conectados à internet.
               Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível.
               Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.`,
      expanded: false
    },
    {
      question: 'Quanto custa a Netflix?',
      answer: `Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. 
               Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.`,
      expanded: false
    },
    {
      question: 'Onde posso assistir?',
      answer: `Assista em qualquer lugar, a qualquer hora, em um número ilimitado de dispositivos. Faça login com sua 
               conta Netflix para assistir instantaneamente na web em netflix.com de seu computador pessoal ou em qualquer dispositivo conectado
               à internet que ofereça o aplicativo Netflix, incluindo smart TVs, smartphones, tablets, reprodutores de mídia streaming e consoles de jogos.
               Você também pode baixar seus programas favoritos com o aplicativo iOS, Android ou Windows 10. 
               Use os downloads para assistir em qualquer lugar e sem uma conexão com a Internet. Leve a Netflix com você para qualquer lugar.`,
      expanded: false
    },
    {
      question: 'Como faço para cancelar?',
      answer: `Netflix é flexível. Não há contratos irritantes nem compromissos. Você pode facilmente cancelar sua conta online em dois cliques. 
               Não há taxas de cancelamento – inicie ou interrompa sua conta a qualquer momento.`,
      expanded: false
    },
    {
      question: 'O que posso assistir na Netflix?',
      answer: `A Netflix tem uma extensa biblioteca de longas-metragens, documentários, programas de TV,
               anime, originais premiados da Netflix e muito mais. Assista o quanto quiser, quando quiser.`,
      expanded: false
    }
  ];

  toggle(index: number): void {
    this.faqs[index].expanded = !this.faqs[index].expanded;
  }
}