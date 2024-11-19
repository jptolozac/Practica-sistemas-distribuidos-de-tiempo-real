FROM ubuntu

    RUN apt-get update && \
        apt-get install -y \
            openssh-server \
            systemd \
            nginx \
        && apt-get clean

    RUN mkdir -p /run/systemd && \
        mkdir -p /var/run/nginx && \
        mkdir -p /run/sshd

    RUN echo 'root:123456' | chpasswd

    RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

    EXPOSE 22 80 3000

    CMD service ssh start && nginx -g 'daemon off;'
    