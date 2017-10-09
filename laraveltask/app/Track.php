<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Track extends Model
{
  protected $table = 'Track';
  protected $fillable = ['id_track', 'id_album', 'artist', 'title','time'];
  protected $primaryKey = 'id_track';
  public $timestamps = false;
}
