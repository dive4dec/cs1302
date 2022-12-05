---
jupyter:
  jupytext:
    formats: ipynb,md
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.13.8
  kernelspec:
    display_name: Python 3 (ipykernel)
    language: python
    name: python3
---

# Introduction to Computer Programming


[![Jupyter Lite][lite-badge]](https://dive4dec.github.io/cs1302/lab/?path=README.ipynb)

[lite-badge]: https://jupyterlite.rtfd.io/en/latest/_static/badge.svg


- Click the badge above to run the notebooks in jupyterlite. 
- To support all required packages, run the notebooks in a docker container.

<!-- #region tags=[] jp-MarkdownHeadingCollapsed=true tags=[] jp-MarkdownHeadingCollapsed=true -->
## Run Notebooks in Docker
<!-- #endregion -->

<!-- #region jp-MarkdownHeadingCollapsed=true tags=[] -->
### Using nbgitpuller
<!-- #endregion -->

- To run locally on your computer with permanent storage:
  - Install [docker](https://docs.docker.com/get-started/#download-and-install-docker).
  - Run the docker in a terminal from a working directory of your choice:  
      ```markdown
      docker run --rm -p 8888:8888 \
               -v "${PWD}":/home/jovyan \
               chungc/cs1302nb:0.0.2b \
               start-notebook.sh --NotebookApp.token=''
      ```
    - It may take a couple minutes to run for the first time as it needs to download the docker image. Subsequent run should be fast.
    - Port 8888 should be free for use. Otherwise, change it to a free port on your computer with `-p {free port}:8888`.
  - Pull the notebooks from this repo in a web browser:  
      <http://localhost:8888/git-pull?repo=https%3A%2F%2Fgithub.com%2Fdive4dec%2Fcs1302&urlpath=lab%2Ftree%2Fcs1302%2FREADME.ipynb>
    - You can work on the notebooks under the `cs1302` subfolder. Clicking the above link again will automatically pull and merge changes from the repo, without overwritting your changes.
    - To finish, stop the notebook server by pressing `Control-C` in the terminal that runs the docker.
    - To restart, run the docker command again from the same working directory. You files should still be under the `deepdive` subfolder.

<!-- #region jp-MarkdownHeadingCollapsed=true tags=[] -->
### Using VSCode Dev Containers
<!-- #endregion -->

- Install and run [docker](https://docs.docker.com/get-started/#download-and-install-docker).
- Install and run [VSCode](https://code.visualstudio.com/).
  - Install [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) extension for VSCode.
  - Run `Dev Containers: Clone Repository in Named Container Volume...`
      - repository: https://github.com/dive4dec/cs1302
      - branch: main
      - volume name: cs1302-remote-containers
      - target folder name: cs1302

<!-- #region tags=[] -->
## Table of Content
<!-- #endregion -->

### Lab 0


[Setup and Debugger](Lab0/main.ipynb)


### Lecture 1


[Introduction to Computer Programming](Lecture1/Introduction%20to%20Computer%20Programming.ipynb)


### Lab 1


[Card guessing game](Lab1/main.ipynb)


### Lecture 2


[Values and Variables](Lecture2/Values%20and%20Variables.ipynb)


[Expressions and Arithmetic](Lecture2/Expressions%20and%20Arithmetic.ipynb)


### Lab 2


[Calculators](Lab2/main.ipynb)


### Lecture 3


[Conditional Execution](Lecture3/Conditional%20Execution.ipynb)


[Iteration](Lecture3/Iteration.ipynb)


### Lab 3a


[Improved Quadratic Equation Solver](Laba/main.ipynb)


### Lab 3b


[Big Number Conversion](Labb/main.ipynb)


### Lecture 4


[Using Functions](Using%20Functions.ipynb)


[Writing Function](Writing%20Function.ipynb)


### Lab 4


[Mastermind](Lab4/main.ipynb)


### Lecture 5


[Objects](Objects.ipynb)


### Lab 5


[Pandas](Lab5/main.ipynb)


### Lecture 6


[Generator](Generator.ipynb)


[Decorator](Decorator.ipynb)


### Lab 6


[Combinatorics](Lab6/main.ipynb)


### Lecture 7


[Sequence Types](Sequence%20Types.ipynb)


[Operations on Sequences](Operations%20on%20Sequences.ipynb)


### Lab 7


[Cybersecurity](Lab7/main.ipynb)


### Lecture 8


[Dictionaries and Sets](Dictionaries%20and%20Sets.ipynb)


### Lab 8


[Information Theory](Lab8/main.ipynb)


### Lecture 9


[Monte Carlo Simulation and Linear Algebra](Monte%20Carlo%20Simulation%20and%20Linear%20Algebra.ipynb)


### Lab 9


[Monte Carlo and Root Finding](Lab9/main.ipynb)


### Lecture X


[Review](Review.ipynb)

