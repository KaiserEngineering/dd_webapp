package KEApp::Controller::API;
use Mojo::Base 'Mojolicious::Controller';


sub config {
  my $c = shift;

  $c->app->LoadConfig();

  $c->render(json => $c->app->{'Config'});
}

sub constants {
    my $c = shift;

    $c->render(json => $c->app->{'Constants'});
}

sub index {
  my $c  = shift;

  $c->reply->static('index.html');
}

sub login {
  my $c = shift;

  $c->Notification;

  my $args = $c->req->params->to_hash;

  if ( $args->{'username'} && $args->{'password'} ) {
    my $ret = $c->authenticate(
        $args->{'username'}, $args->{'password'},
    );

    if ( $ret ) {
      push @{ $c->session->{'notifications'} }, {
        message => "You are logged in!",
        type    => "info"
      };
      $c->redirect_to('/', handler => 'mason');
    }
    else {
      push @{ $c->session->{'notifications'} }, {
        message => "Failed login",
        type    => "error"
      };
      $c->render('login.html', handler => 'mason');
    }
    return;
  }

  $c->render('login.html', handler => 'mason');
}

sub edit {
  my $c = shift;

  my $id = @{$c->every_param('id')}[0];

  $c->render( "edit.html", handler => 'mason', id => $id);
}

sub update {
  my $c = shift;
  my %args = (
    %{$c->req->json}
  );
  my $config = $c->app->{'Config'};

  my $temp_view = $config->{'views'}->{$args{'id'}};
  %{$temp_view} = %args;

  my @gauges = ();
  foreach my $gauge ( @{ $temp_view->{'gauges'} } ) {
      push @gauges, {
            %{$gauge},
            "path" => "\/$args{'theme'}\/"
      };
  }
  $temp_view->{'gauges'} = \@gauges;

  $config->{'views'}->{$args{'id'}} = $temp_view;

  my ($ret, $msg) = $c->UpdateConfig( $config );

  $c->render(json => { config => $c->app->{'Config'}, message => "Updated config!" });
}

sub advanced {
  my $c = shift;
  my $config = $c->req->params->to_hash;

  if ( $config->{'config'} ) {
      # update
  }

  $c->render( "advanced.html", handler => 'mason' );
}

1;
