commands i used 
  systemctl list-units
  systemctl status ssh
  systemctl status sshd
  systemctl list-unit-files 
  systemctl list-unit-files | grep nginx
  ls
  ls project
  tar -cvf project.tar project
  ls
  ls project.tar 
  tar --help
  tar -T project.tar 
  tar --help | grep list
  tar -t project.tar
  tar --help | grep -f
  tar --help | grep "-f"
  tar -tf project.tar 
  ls
  tar -zvf project.tar projectun
  tar --help | grep extract
  tar -xvf project.tar projectExtract
  tar -xvf project.tar 
  ls
  mkdir ExtractedFiles ; tar -xvf project.tar -C ExtractedFiles
  ls
  ls ExtractedFiles/
  ls ExtractedFiles/project/
  systemctl list-units --type=service
  systemctl list-units --type=service | grep nginx
  systemctl status nginx
  systemctl list-units --type=service --status=running
  systemctl list-units --type=service --state=running
  systemctl list-units --type=service | grep running
  systemctl start nginx.service 
  systemctl status nginx.service 
  systemctl list-units --state=running
  systemctl list-units --state=running --type =service
  systemctl list-units --state=running --type=service
  systemctl list-units --state=running --type=service | grep nginx
  systemctl list-units --type=service --state=failed
  systemctl list-units --type=service | grep failed
  systemctl list-unit-files --type service
  systemctl list-unit-files --state=enabled
  systemctl list-unit-files --state=enabled | grep nginx
  systemctl list-unit-files --state=disabled
  systemctl list-unit-files --state=disabled | grep nginx
  systemctl list-unit-files | grep disabled
  uptime
