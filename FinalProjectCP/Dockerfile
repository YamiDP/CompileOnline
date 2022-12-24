FROM ubuntu:latest


RUN apt update && \
    apt install curl wget -y &&\
    curl http://ftp.de.debian.org/debian/pool/main/g/gcc-defaults/g++_10.2.1-1_amd64.deb -O &&\
    curl -sL https://deb.nodesource.com/setup_14.x &&\
    apt -y install gcc g++ python3 python3-pip nodejs npm && \
    pip3 install numpy &&\
    wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.deb &&\
    apt install ./jdk-17_linux-x64_bin.deb -y &&\
    update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk-17/bin/java" 1 &&\
    apt remove wget curl -y && \
    rm ./jdk-17_linux-x64_bin.deb &&\
    apt autoremove -y &&\
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/Docker

RUN ln -s /usr/bin/python3 /usr/bin/python
COPY . /usr/src/Docker

WORKDIR /usr/src/Docker

RUN npm install

EXPOSE 8080



CMD ["node","index.js"]