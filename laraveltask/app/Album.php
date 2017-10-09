<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    protected $table = 'Album';
    protected $fillable = ['id_album', 'title', 'year'];
    protected $primaryKey = 'id_album';
    public $timestamps = false;
}
