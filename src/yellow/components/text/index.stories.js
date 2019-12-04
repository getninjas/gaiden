export default {
  title: 'Components | Text',
  parameters: {
    componentSubtitle: 'Text gives style to font.',
  },
};

import './_index.scss';

export const allText = () => `
  <div>
    <p class="text text--dark">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
  <div>
    <p class="text text--medium">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
  <div>
    <p class="text text--positive">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
  <div>
    <p class="text text--alert">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
  <div>
    <p class="text text--negative">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
`;

export const Dark = () => '<p class="text text--dark">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>';

export const Medium = () => '<p class="text text--medium">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>';

export const Positive = () => '<p class="text text--positive">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>';

export const Alert = () => '<p class="text text--alert">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>';

export const Negative = () => '<p class="text text--negative">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>';

export const Inverse = () =>`
  <div style="background-color: #000">
    <p class="text text--inverse">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
`;

export const Strong = () =>
'<p class="text text--xl text--strong"">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>';

export const Link = () => `
  <div>
    <p class="text text--medium">Agora, se a necessidade é de um pedreiro urgente, a dica é avaliar o melhor custo-benefício e ficar atento ao prazo do profissional: muitos <a href="www.getninjas.com.br" target= "_blank">pedreiros residenciais</a> costumam ter a agenda cheia em razão da longa duração de muitos dos serviços que prestam. Assim, é melhor se programar!</p>
  </div>
`;
