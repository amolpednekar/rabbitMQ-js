# rabbitMQ-nodejs

## [Using RabbitMQ Package Repository on Bintray](https://www.rabbitmq.com/install-debian.html#apt)
RabbitMQ packages can be installed from apt (Debian) repositories on  [Bintray](https://bintray.com/rabbitmq/debian/rabbitmq-server)  or  [Package Cloud](https://packagecloud.io/rabbitmq/rabbitmq-server).

### [Using Bintray Apt Repository](https://www.rabbitmq.com/install-debian.html#bintray-apt-repo)

When using the repository on Bintray it is recommended that Erlang/OTP is also  [installed from Bintray](https://www.rabbitmq.com/install-debian.html#installing-erlang-package).

#### Signing Key

In order to use the repository, add a key used to sign RabbitMQ releases to  apt-key:

    wget -O - 'https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc' | sudo apt-key add -

This will instruct apt to trust packages signed by that key.

#### Source List File

As with all 3rd party apt repositories, a file describing the repository must be placed under the  /etc/apt/sources.list.d/  directory.  /etc/apt/sources.list.d/bintray.rabbitmq.list  is the recommended location. The file should have a source (repository) definition line that uses the following pattern:

    #See below for supported distribution and component values
    deb https://dl.bintray.com/rabbitmq/debian $distribution main



## [Run RabbitMQ Server](https://www.rabbitmq.com/install-debian.html#running-debian)

The server is started as a daemon by default when the RabbitMQ server package is installed. It will run as a non-privileged user  rabbitmq.

As an administrator, start and stop the server as usual for Debian-based systems: 
`service rabbitmq-server start`

> Written with [StackEdit](https://stackedit.io/).
